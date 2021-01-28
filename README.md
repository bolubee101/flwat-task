# flwat-task
### My Rule-Validation API

#### Host
https://bolu-flwat-task.herokuapp.com

##### Endpoint:

- HTTP GET "/"

- HTTP POST "/validate-rule"

#### Tests
##### Test directory
https://github.com/bolubee101/flwat-task/tree/main/tests

##### Test dependencies
- supertest
- jest

##### Instructions
###### To run test
```sh
$ npm test 
```

###### To add tests
- define test parameters as shown here:
- import new test

```js
const example5=require("./example5");
```
- Add test to 
```js
test('"/validate-rule  Missing field in rule object', async () => {
    res=  await request(app)
          .post('/validate-rule')
          .send(example5.body);
      const response=example5.response
      expect(res.status).toBe(example5.status);
      expect(res.body).toEqual(response);
  
});
```

