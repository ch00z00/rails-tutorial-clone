import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { LargeContent } from './components/layout/LargeContent';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-between items-center w-full h-[34px] px-[100px] xl:px-[300px] bg-subheader text-md text-white">
        <div>学習の流れ</div>
        <div>Webテキスト</div>
        <div>解説動画</div>
        <div>電子書籍</div>
        <div>質問対応</div>
        <div>法人・研修支援</div>
        <div>大学・教材連携</div>
        <div>読み物ガイド</div>
      </div>
      <main className="w-screen h-fit flex pt-8 pb-20 justify-center items-start bg-background-base">
        <div className="w-[792px] h-fit space-y-10 p-[40px] bg-white">
          <div className="flex flex-col gap-8 p-[40px] mb-20 bg-title-frame border-2 text-title-text font-mono border-gray-300">
            <div className="text-[40px] font-semibold">Ruby on Rails チュートリアル</div>
            <div className="text-[24px] font-bold">プロダクト開発の０→１を学ぼう</div>
          </div>
          <Content
            title="第1部　Rails"
            content1="Railsは、本格的なWebサービスを開発するためのツールとして急速に有名になりました。"
            content2="オープンソースのWeb開発フレームワークです。"
            content3="Webサービス開発に必要な機能を備えているため開発・保守・運用のための便利なライブラリや機能を備えており、開発効率や保守性が向上すること"
          />
          <Content
            title="第2部　MVC"
            content1="MはModelの略で役割はデータベースとの通信、VはViewの略で役割は受け取ったデータを元にHTMLを生成すること、CはControllerの略で役割はリクエストの処理です。"
            content2="プレゼンテーション（View・Controller）とドメイン（Model）を分離し、また、ユーザー入力（Controller）と表示（View）も分離することで、ソフトウェアの保守性・開発生産性を向上させられる。"
          />
          <LargeContent
            title="第3部　REST API"
            content1="GET	/users	index	すべてのユーザーを一覧する"
            content2="GET	/users/user_id	show  user_idのユーザーを表示する"
            content3="GET	/users/new	new	新規ユーザーを作成する"
            content4="POST	/users	create	ユーザーを作成する"
            content5="GET	/users/user_id/edit	edit	user_idのユーザーを編集する"
            content6="PATCH	/users/user_id	update	id=1のユーザーを更新する"
            content7="DELETE	/users/user_id	destroy	id=1のユーザーを削除する"
          />
          <LargeContent
            title="第4部　MVCの挙動"
            content1="1. ブラウザから「/users」というURLのリクエストをRailsサーバーに送信する。"
            content2="2. 「/users」リクエストは、Railsのルーティング機構（ルーター）によってUsersコントローラ内のindexアクションに割り当てられる。"
            content3="3. indexアクションが実行され、そこからUserモデルに、「すべてのユーザーを取り出せ」（User.all）と問い合わせる。"
            content4="4. Userモデルは問い合わせを受け、すべてのユーザーをデータベースから取り出す。"
            content5="5. データベースから取り出したユーザーの一覧をUserモデルからコントローラに返す。"
            content6="6. Usersコントローラは、ユーザーの一覧を@users変数（@はRubyのインスタンス変数を表す）に保存し、indexビューに渡す。"
            content7="7. indexビューが起動し、ERB（Embedded RuBy: ビューのHTMLに埋め込まれているRubyコード）を実行して HTMLを生成（レンダリング）する。"
            content8="8. コントローラは、ビューで生成されたHTMLを受け取り、ブラウザに返す。"
          />
          <LargeContent
            title="第5部　ログインの流れ"
            content1="1. ログインページではnewアクションで新しいセッションを出力する。"
            content2="2. そのページでログインするとcreateアクションでセッションを作成して保存する。"
            content3="3. ログアウトするとdestroyアクションでセッションを破棄する。"
            content4="また、パスワードが異なる場合はログインに失敗し、エラーメッセージが表示された後、ログインページを再表示する。"
          />
          <Content
            title="第6部　user_params"
            content1="name, email, password, password_confirmationの4つのキーのみをpermitメソッドで許可している。paramsハッシュではrequireを用い、:userキーの取得を必須としている。"
          />
          <Content
            title="第7部　@current_user ||= User.find_by(id: session[:user_id])"
            content1="||＝の左辺では、ログインしているユーザー(@current_user)がUserモデルに存在するかどうかを判定している。右辺では、左辺の@current_userが存在しない場合、find_byメソッドを使ってsessionキーのもつuser_idをもとに、Userモデルから一致するユーザーを探す。"
            content2="そして、一致したユーザーを@current_userに代入する。"
            content3="これらを||=を使用することで、1行で記述することができている。"
          />
          <LargeContent
            title="第8部　remember me"
            content1="1. ランダムに生成した文字列を記憶トークンとして使う。"
            content2="2. cookiesメソッドで、ブラウザの永続cookiesに、暗号化したユーザーIDとハッシュ化した記憶トークンを保存する。"
            content3="3. 記憶トークンをcookiesに保存する際には、cookiesにexpiresオプションを指定して有効期限を設定する。"
            content4="4. それ以降、ブラウザのcookiesに暗号化されたユーザーIDがあったら、復号したユーザーIDでデータベースを検索し、データベース内のハッシュ値と一致するか確認する。"
            content5="5. 一致した場合、セッションを復元する。"
          />
          <Content
            title="第9部　downcase"
            content1="user = User.find_by(email: params[:session][:email].downcase)"
            content2="paramsハッシュはsessionキーを、sessionキーはemailキーを持っており、downcaseメソッドでemailを小文字化している。find_byメソッドは、emailキーを元に、Userモデルから一致するユーザーを探している。"
            content3="最終的には一致したユーザーをローカル変数userに代入している。"
          />
          <LargeContent
            title="第10部　authenticate"
            content1="if user && user.authenticate(params[:session][:password])"
            content2="&&の左辺では、userが存在するかを判定している。"
            content3="右辺では、paramsハッシュはsessionキーを、sessionキーはpasswordキーを持っている。"
            content4="authenticateメソッドでその暗号化されたパスワードがuserの保存済みパスワードと一致するかを判定し、userを認証している。"
            content5="右辺と左辺の両方の判定結果がtrueの場合のみこの1行のif文としてtrueを返す。"
            content6="&&を使用することで、これらの条件文を1行で記述できている。"
          />
          <LargeContent
            title="第11部　フォームのチェックボックス"
            content1="params[:session][:remember_me] == '1' ? remember(user) : forget(user)"
            content2="paramsハッシュはsessionキーを、sessionキーはremember_meキーを持っている。remember_meキーはユーザーのセッションを永続化するかどうかのフラグとなっている。"
            content3="ユーザーのログインフォームのセッション永続化チェックボックスがONの場合は1、OFFの場合は0となる。?の左辺がtrue(remember_meが1)の場合はrememberメソッドでuserのセッションを記憶し、false(remember_meが0)の場合はforgetメソッドでuserの記憶を削除する。"
            content4="三項演算子(? :)を用いることで、これらを1行で記述できている。"
          />
          <Content
            title="第12部　リダイレクト"
            content1="redirect_back_or user"
            content2="userに対して、redirect_back_orを実行している。"
          />
          <LargeContent
            title="第13部　createメソッド"
            content1="あるユーザーがログインするとき"
            content2="フォームから送信されたemailをもとにfind_byメソッドでユーザーを検索している。ユーザーが存在し、かつ認証に成功した場合はログイン処理を実行する。"
            content3="セッション固定化攻撃を防ぐためにreset_sessionメソッドでセッションをリセットし、remember_meキーに従ってセッション永続化を設定する。"
            content4="認証に失敗した場合はエラーメッセージを表示してログイン画面を再表示する。"
          />
          <Content
            title="第14部　relationshipテーブル"
            content1="能動的関係と受動的関係という2つのモデルを表現するrelationshipsテーブルで実現する。"
          />
          <Content
            title="第15部　follower, following"
            content1="GET  /user/follower/user_id  |  follower"
            content2="GET  /user/following/user_id  |  following"
          />
          <Content
            title="第16部　ユーザー情報ページ"
            content1="eachメソッドで、フォローしているユーザー(@user.following)それぞれに対して処理を実行している(do |user| ...end)。"
            content2="文字列'a[href=?]'とuser_pathメソッドをもとに、<a>タグの中にuserのユーザー情報ページへのリンクが存在するかを、Railsのテスト用メソッドであるassert_selectで検証している。"
          />
          <Content
            title="第17部　should follow and unfollow a user"
            content1="あるユーザーをフォローしているか、新たにフォローできるか、フォローを解除できるかをテストしている。"
            content2="followメソッドでユーザーをフォローできるか、unfollowメソッドでフォローを解除できるかを、assert_notメソッドとfollowing?を用いて、あるユーザーをフォローしていないかをテストして確認している。"
          />
        </div>
      </main>
    </div>
  );
}
