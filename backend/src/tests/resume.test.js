const request = require('supertest');
const app = require('../server');

describe('Resume API Endpoints', () => {
  it('should return health check', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });

  it('should return full resume', async () => {
    const res = await request(app).get('/api/resume');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('basics');
    expect(res.body).toHaveProperty('education');
    expect(res.body).toHaveProperty('experience');
  });

  it('should return education section', async () => {
    const res = await request(app).get('/api/resume/education');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should return experience section', async () => {
    const res = await request(app).get('/api/resume/experience');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });
});