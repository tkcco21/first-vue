# Atomic Design

## Atomic Designとは
パーツ・コンポーネント単位で定義していくUIデザイン手法。  

最小の単位の「原子」から、「分子」、「生命体」、「テンプレート」、「ページ」とパーツ・コンポーネントを徐々に大きくしていく。

- Atoms（原子）
- Molecules（分子）
- Organisms（生命体）
- Template（テンプレート）
- Page（ページ）

## Atoms（原子）
Atomsは基本的にprops（色・テキストなど）として渡したものをレンダリングする。  
見出しテキスト、テキスト、ボタン、入力欄などの最小要素を定義。  
styleはタグをセレクタに指定。固有のクラスは使わない。  
イベントの発行をする。  
ステートレス

## Molecules（分子）
比較的単純で再利用可能なように作成する。  
固有のstyleはここでつける  
Moleculesの主な役割はAtomsのイベントハンドリング。  
また、親コンポーネント（基本的にはOrganisms）から値を受け取り、Atomsとの橋渡し的な役割を担う。  
ステートレス

## Organisms（生命体）
AtomsとMoleculesの組み合わせで構成される。  
また、MoleculesやAtomsのイベントハンドリングをし、必要であればVuexなども使う。  
基本的にAtomsやMoleculesはOSSとして公開してもいいレベルで抽象化するが、Organismsはドメインに関する処理を入れてもいい。  
親要素からのデータ受け取るが、なるべく少ないほうがいい。Storeへのアクセスをしてもいい。  
複数のTemplateから利用されることを想定して作る。

## Templates（テンプレート）
AtomsとMoleculesとOrganismsの組み合わせで構成される、1つのページとなるもの。  
Storeへのアクセスをしてもいい。

## Pages（ページ）
> 考案した人のブログにあるPageという概念は
> デザイナーから見た個別のページと
> デザインされるべきテンプレートを呼び分けるということなので
> Vueのコンポーネント設計では存在しない、はず。

<img src="https://cdn-images-1.medium.com/max/1600/1*z_lXMRwgtopRbrEniVrBLw@2x.png" alt="">