(Vagrantで仮想開発環境の構築)

# Vagrant CentOS7.5

## ホストOS（Mac）

### vagrant初期化
```
$ vagrant init bento/centos-7.5

# => Vagrantfileができるので下記を参考にコメントアウトを外す
...
config.vm.network "forwarded_port", guest: 80, host: 8080
...
config.vm.network "private_network", ip: 192.168.33.10 // 任意で変えてください
```

### ローカルのhostファイルに追記
```
$ sudo vi /etc/hosts

# 以下を追記
192.168.33.10 dev.first-vue.com
```

### ゲストOSにログイン

```
$ vagrant up
$ vagrant ssh
```


## ゲストOS

### yumパッケージを更新
```
$ sudo yum update
```

### タイムゾーンの変更
```
$ date # UCTになってる
$ sudo cp /usr/share/zoneinfo/Japan /etc/localtime
$ date # JSTになる
```

### Git

```
$ git --version # コマンドが見つからない or v1.x なら、v2をインストール
$ sudo yum remove git # 上記でv1なら一回削除
$ sudo yum install https://centos7.iuscommunity.org/ius-release.rpm
$ sudo yum install git2u
$ git --version # v2
```

### Nginx

```
$ sudo yum install http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
$ sudo yum -y install nginx
$ sudo service nginx start
$ systemctl status nginx # ステータスの確認
$ sudo systemctl enable nginx
```

### Firewall

```
$ sudo iptables -I INPUT -p tcp -m tcp --dport 80 -j ACCEPT
$ sudo iptables -I INPUT -p tcp -m tcp --dport 443 -j ACCEPT
```

### SSL

```
$ sudo mkdir /etc/ssl/private
$ sudo chmod 700 /etc/ssl/private

$ sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt
# ここで質問が出る。答えても答えなくても

$ sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
```

### nginxの設定ファイル

```
$ sudo vi /etc/nginx/conf.d/ssl.conf

#==========================================
upstream first-vue {
    server 127.0.0.1:3000;
}
server {
    listen 443 http2 ssl;
    listen [::]:443 http2 ssl;

    server_name server_IP_address;

    ssl_certificate /etc/ssl/certs/nginx-selfsigned.crt;
    ssl_certificate_key /etc/ssl/private/nginx-selfsigned.key;
    ssl_dhparam /etc/ssl/certs/dhparam.pem;

    ########################################################################
    # from https://cipherli.st/                                            #
    # and https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html #
    ########################################################################

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";
    ssl_ecdh_curve secp384r1;
    ssl_session_cache shared:SSL:10m;
    ssl_session_tickets off;
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;
    # Disable preloading HSTS for now.  You can use the commented out header line that includes
    # the "preload" directive if you understand the implications.
    #add_header Strict-Transport-Security "max-age=63072000; includeSubdomains; preload";
    add_header Strict-Transport-Security "max-age=63072000; includeSubdomains";
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;

    ##################################
    # END https://cipherli.st/ BLOCK #
    ##################################

    proxy_redirect                          off;
    proxy_set_header Host                   $host;
    proxy_set_header X-Real-IP              $remote_addr;
    proxy_set_header X-Forwarded-Host       $host;
    proxy_set_header X-Forwarded-Server     $host;
    proxy_set_header X-Forwarded-For        $proxy_add_x_forwarded_for;

    location / {
        proxy_pass http://first-vue/;
    }

    error_page 404 /404.html;
    location = /404.html {
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
      root   /usr/share/nginx/html;
    }
}
#==========================================

$ sudo mkdir /etc/nginx/default.d/
$ sudo vi /etc/nginx/default.d/ssl-redirect.conf

#==========================================
return 301 https://$host$request_uri/;
#==========================================

$ sudo nginx -t
```

### MySQL v5.7

```
# CentOS7にはmarinaDBが入ってるので、それの削除
$ rpm -qa | grep maria
$ sudo yum remove mariadb-libs
$ sudo rm -rf /var/lib/mysql

# MySQL
$ sudo rpm -Uvh http://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
$ sudo yum install --enablerepo=mysql57-community mysql-community-server
$ mysqld --version

$ sudo cp -p /etc/my.cnf /etc/my.cnf.orig
$ sudo vi /etc/my.cnf

# 以下追記
[mysqld]
character-set-server=utf8
sql_mode=NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
[client]
default-character-set=utf8
[connection]
default-character-set=utf8
[results]
default-character-set=utf8

# ↓でMySQLの初期パスワード出てたのに。。。できなかったので、その下でやった。。
grep 'temporary password' /var/log/mysqld.log

$ sudo systemctl set-environment MYSQLD_OPTS="--skip-grant-tables"
$ sudo systemctl start mysqld.service
$ mysql -uroot
mysql> update mysql.user set authentication_string = PASSWORD('パスワード') where user = 'root' and host = 'localhost';
mysql> FLUSH PRIVILEGES;
$ sudo systemctl stop mysqld.service
$ sudo systemctl unset-environment MYSQLD_OPTS
$ sudo systemctl start mysqld.service
$ mysql -uroot # ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: NO)
$ mysql -uroot -p
```

### Node.js

```
$ git clone https://github.com/creationix/nvm.git ~/.nvm
$ vi ~/.bash_profile

# 以下を追記
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

$ source ~/.bash_profile

$ nvm install v10.15.0
```
