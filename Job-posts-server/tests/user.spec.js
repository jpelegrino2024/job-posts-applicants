import app from './../src/app.js';
import request from 'supertest';
import { createUser } from './user.mock.js';

describe('GET/ USERS', () => {
  let response;
  beforeEach(async () => {
    response = await request(app).get('/api/v1/users').send();
  });

  test('should response with status 200', () => {
    expect(response.statusCode).toBe(200);
  });

  test('Should response an array', async () => {
    expect(response.body).toEqual(expect.arrayContaining([]));
  });
});

describe('Sign up User', () => {
  let response;
  beforeEach(async () => {
    response = await request(app).post('/api/v1/users/signUp').send(createUser);
  });

  test('should response with status 201', () => {
    expect(response.statusCode).toBe(201);
  });

  test('should have data property populated', () => {
    expect(response.body).toHaveProperty('data');
  });

  test('should have id property defined', () => {
    expect(response.body.data.id).toBeDefined();
  });
});
