个人博客中心接口  http://blog.com/api/blog/myBlog
 **请求方式：**
- post
  |参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|user_id |是  |int |当前登陆用户id|
  **返回示例**
  ``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
      my_blog_lists: [
      {
        id: "35",   //这条博客的id
        title: "1111",//这条博客的title
        classify_id: "5",//这条博客的分类id
        date: "2017-11-05 15:35:52",//这条博客发布时间
        read_num: 101,//这条博客浏览量
        classify_name: "日记"//这条博客分类名
      },
      {
        id: "36",
        title: "11112",
        classify_id: "5",
        date: "2017-11-05 15:35:59",
        read_num: 101,
        classify_name: "日记"
      }
    ]
    }
  }

  发布博客按钮接口  http://blog.com/api/blog/doAdd
 **请求方式：**
- post
 参数 
  user_id 必须 int 当前登录用户id
  title 必须  string 博客title
  content 必须 string 博客内容
  classify_id 必须 int 博客分类id
  **返回示例**
  ``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    }
  }
```

个人博客中心更新博客页面接口  http://blog.com/api/blog/add
 **请求方式：**
- get
  |参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|user_id |是  |int |当前登陆用户id|
|blog_id |否 |int |更新blog的id|
  **返回示例** //如果有blog_id才有my_blog_info否则只有classify_lists
  ``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
      classify_lists: [
      {
      classify_id: "", //分类id
      classify_name: ""//分类名
      },
      {
      classify_id: "",
      classify_name: ""
      },
    ],
    my_blog_info: {
      title: "有意思",
      content: "萨达所大所",
      classify_id: "4",
      createtime: "2018-04-15 14:44:50"
    }
    }
  }
```
- 更新按钮接口

**请求URL：** 
- ` http://blog.com/api/blog/doEdit

 `
  
**请求方式：**
- POST

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|user_id |是  |int |当前登录用户id|
|blog_id |是  |int |更新博客id|
|title  |是  |string ||
|content |是  |string ||
classify_id|是  |int |分类id|

 **返回示例**

``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
    }
  }
``
`
个人博客中心删除博客接口  http://blog.com/api/blog/del
 **请求方式：**
- post
  |参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|user_id |是  |int |当前登陆用户id|
|blog_id |是  |int |删除blog的id|
  **返回示例**
  ``` 
  {
    "error_code": 0,
    "message": "success",
    "data": {
      
    }
  }
```
