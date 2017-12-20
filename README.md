# Node JS & MySQL

<h3> <u>default page</u></h3>
<p> default page can be accessed by <a href="http://111.223.112.132:3000"> http://111.223.112.132:3000 </a></p>
<br/>

<h3> <u> GET method by key </u> </h3>
<p style="margin-bottom: 50px"> latest "value" can be retrieved by "key" <br/>
  <a href="http://111.223.112.132:3000/object/yourkey"> http://111.223.112.132:3000/object/yourkey </a></p>

<h3> <u> GET method by key + timestamp </u> </h3>
<p style="margin-bottom: 50px"> latest "value" can be retrieved by "key" and "timestamp" <br/>
  although not an exect time, the latest "value" will be returned. <br/>
    <a href="http://111.223.112.132:3000/object/mykey?timestamp=1440568980"> http://111.223.112.132:3000/object/mykey?timestamp=1440568980 </a></p>


<h3> <u> POST method </u> </h3>
<p> new key and value can be saved <br/>
<a href="http://111.223.112.132:3000/object"> http://111.223.112.132:3000/object</a></p>
<p> <font style="color:red">Format:</font>  x-www-form-urlencoded <br/>
    <font style="color:red">Body:</font> JSON: {mykey : value2} </p>
