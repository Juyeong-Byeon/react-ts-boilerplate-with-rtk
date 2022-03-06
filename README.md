# react-ts-boilerplate-with-rtk


## 기본적인 기술 스텍
  
  ts, react, axios, react-router, redux-toolkit, styled-components


## 스크립트 
개발용 빌드와 배포용 코드 빌드가 나누어져있다. 

```script
npm run dev // 개발용 코드 빌드 
npm run prod // 배포용 코드 빌드 
```
 
## 번들러 설정

웹팩 사용.
config/하위에 설정파일이 있음. 

실행스크립트에 따라서 다른 설정파일이 선택되어 빌드된다. 
* webpack.config.common.js : 개발 모드, 배포 모드 모두에 필요한 기본 설정들을 모아둔 파일 HTML-loader, react-refresh, env 플러그인등이 사용되었다.
* webpack.config.dev.js : 개발모드에 적합한 웹팩 설정.'inline-source-map', 'style-loader' dev 서버 등 설정.
* webpack.config.prod.js : 실제 배포에 적합한 웹팩 설정. MiniCssExtractPlugin.loader, UglifyJsPlugin 등 빌드에는 조금 더 시간이 걸리지만 서빙 사이즈가 작아지는 설정 등이 있다.

### ts 설정 

babel-loader를 이용함.
babel-loader는 js의 여러 공식/비공식 문법으로 작성된 코드를 target es-version으로 트랜스파일링 해주는 역할을 한다.

세부 설정은 babel에서 공식적으로 제공하고 있는 preset을이용했다. 
```
'@babel/preset-env', // 최신 ESNext 문법을 사용 가능하게 해주는 프리셋
'@babel/preset-react', // jsx, displayName 등의 플러그인을 포함한 프리셋
'@babel/preset-typescript', //타입스크립트를 사용 가능하게 해주는 프리셋
```

## Utility

hoc:
* withErrorBoundaryView : view를 감싸서 사용. 감싼 view에서 에러가 발생했을 때 fallbackView를 render해준다.

ApiAgent: 
* api용 서버의 base를 env변수로 주입받고, 사용할 땐 https 메서드와 상대 경로만 입력.  
    
  



