# React-Youtube-clone

# Building Youtube Clone Using ReactJS

Nutube :

[React App](https://main--sage-bonbon-32fa28.netlify.app/)

## Features (MVP):

1. Load list of videos
    1. thumbnail
    2. title
    3. channel
    4. when updated
2. Search videos by keywords.
    1. title
    2. channel
3. View videos
    1. title
    2. channel
    3. Channel Image
    4. Description
4. Load related videos
    1. thumbnail
    2. title
    3. channel
    4. when updated
5. Responsive Design
    1. mobile
    2. tablet
    3. pc

## Object:

- [ ]  API 이용하여 데이터 받아오기
- [ ]  route 이용하여 페이지 이동
- [ ]  tan stack query 이용하여 fetch data

## Articles/Bookmarks:

[Embed a YouTube video with 16:9 aspect ratio and full-width](https://www.ankursheel.com/blog/full-width-you-tube-video-embed)

## Technical Notes from the Project:

- JSON 이용 시 에러 : App.js:13 Error fetching data: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
    
    <aside>
    📌 JSON 파일을 public/data 에 넣어 CORS restriction을 피할 수 있다.
    
    </aside>
    
    - If the JSON file is hosted on a different domain, make sure that the server hosting the file allows cross-origin requests (CORS). CORS restrictions can prevent your application from fetching resources from different domains.
        
        this can happen to a local json from an API?
        
    - Yes, CORS restrictions can apply to both local JSON files and APIs hosted on different domains. CORS is a security mechanism enforced by web browsers that restricts cross-origin requests.
        
        When making a request from a webpage to a different domain (even if it's a local file or an API), the server hosting the resource needs to include specific CORS headers in its response. These headers indicate whether the requesting domain is allowed to access the resource.
        
        For local JSON files, you can typically avoid CORS restrictions by hosting the file within the same domain as your web application. **You can place the JSON file in the public folder of your React application and fetch it using a relative path**, like `/data/response.json`.
        
        However, if you are fetching data from an API hosted on a different domain, the API server needs to be configured to allow cross-origin requests from your domain. This typically involves setting the appropriate CORS headers on the server to explicitly allow your domain to access the API.
        
        If you encounter CORS errors while fetching data from an API, you may need to check the API server's CORS configuration and ensure that it allows requests from your domain. If you don't have control over the API server, you may need to contact the server administrator or consider alternative solutions such as proxying the API request through your own server to bypass CORS restrictions.
        

## Data flows:

### First:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9fa8a51-2cde-4cd6-ab61-c7d1e8674c4d/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/31f67b49-a45c-4af3-89d1-89bd50b60e0c/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/477739d5-aee3-4364-884c-ce6c287b5115/Untitled.png)

Netlify Deploying Errors:

- setting environment variables when deploying from Netlify

[Environment variables overview](https://docs.netlify.com/environment-variables/overview/?_gl=1*v0qftt*_gcl_au*MTkxNzMxNzAzLjE2ODY4MzQ0Njk.&_ga=2.55121387.139584373.1688573123-817508246.1686834470)

- disabling warnings as errors

[Treating warnings as errors because process.env.CI = true | bobbyhadz](https://bobbyhadz.com/blog/treating-warnings-as-errors-because-process-env-ci-true)

## 완료하고

- API를 활용하며 경로설정이라던지 CORS, .env를 사용하는 방법에 대하여 알 수 있었다.
- 지난번 todo 프로젝트와 연결하여 입력한 값을 얻어 넘겨주는 것을 나름 스무스하게 진행했을 때 짜릿했다.
- 여러 시행착오가 있었고 사실 완벽하게 만들진 못했지만 어느정도 돌아가는 것을 구현했다는 거에 나름 뿌듯하다.
- 처음 계획 단계에서 살짝 잘못 생각 했던 부분 때문에 몇 일을 고생하다 결국은 편법으로 넘어갔는데 이 부분에 대해서는 강의를 듣고 다시 정리해보고 싶다.
- useQuery를 이용하면서 할 수 있는 것들에 대하여 좀 더 배우고 싶다. 분명 내가 원하는 그 것을 구현 할 수 있을 것 같은데 아직 방식에 서툴러서 원하는 데이터에 정확하게 접근하기 어려웠던 점이 아쉬웠다. useQuery는 좀 더 공부해보고싶다.
- CSS: 작은 노트북 화면으로만 화면을 맞춰 보다가 ㅎ 큰 화면으로 보니 깨진 부분이 많아 좀 당황스럽지만 이부분은 충분히 고칠 수 있는 것으로 보인다.
