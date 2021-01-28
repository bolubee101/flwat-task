const { app } = require('../app');
const request = require('supertest');
const details=require("../api/components/details");
const example1=require("./example1");
const example2=require("./example2");
const example3=require("./example3");
const example4=require("./example4");
const example5=require("./example5");

test('"/"', async () => {
    const res = await request(app).get('/');
    const response = details;
    expect(res.status).toBe(200);
    expect(res.body).toEqual(response);
});

test('"/validate-rule  example 1', async () => {
      res=  await request(app)
            .post('/validate-rule')
            .send(example1.body);
        const response=example1.response
        expect(res.status).toBe(example1.status);
        expect(res.body).toEqual(response);
    
});

test('"/validate-rule  example 2', async () => {
    res=  await request(app)
          .post('/validate-rule')
          .send(example2.body);
      const response=example2.response
      expect(res.status).toBe(example2.status);
      expect(res.body).toEqual(response);
  
});

test('"/validate-rule  example 3', async () => {
    res=  await request(app)
          .post('/validate-rule')
          .send(example3.body);
      const response=example3.response
      expect(res.status).toBe(example3.status);
      expect(res.body).toEqual(response);
  
});

test('"/validate-rule  Missing rule object', async () => {
    res=  await request(app)
          .post('/validate-rule')
          .send(example4.body);
      const response=example4.response
      expect(res.status).toBe(example4.status);
      expect(res.body).toEqual(response);
  
});
test('"/validate-rule  Missing field in rule object', async () => {
    res=  await request(app)
          .post('/validate-rule')
          .send(example5.body);
      const response=example5.response
      expect(res.status).toBe(example5.status);
      expect(res.body).toEqual(response);
  
});

