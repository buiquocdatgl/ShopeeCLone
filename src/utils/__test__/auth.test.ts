import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { clearLS, getAccessTokenFromLS, getRefreshTokenFromLS, setAccessTokenToLS, setRefreshTokenToLS } from '../auth'

const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODgzYzE3MWFmYzJlMWExZjk2OTU4MiIsImVtYWlsIjoic3Rhc3BpMjAyNUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTA3LTAzVDA2OjI1OjMwLjY2MFoiLCJpYXQiOjE2ODgzNjU1MzAsImV4cCI6MTY4ODQ1MTkzMH0.bfE4qP8Ee4F0vCt4fLHWWqy0AZWh9lPnJ_uih-szofk'

const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODgzYzE3MWFmYzJlMWExZjk2OTU4MiIsImVtYWlsIjoic3Rhc3BpMjAyNUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTA3LTAzVDA2OjI1OjMwLjY2MFoiLCJpYXQiOjE2ODgzNjU1MzAsImV4cCI6MTcwMjE4OTUzMH0.Op1HdAtjLJ90MZs55HC8snPcpD8q7A1Q4cTKUNIgK68'

const profile =
  '{"_id":"64883c171afc2e1a1f969582","roles":["User"],"email":"staspi2025@gmail.com","createdAt":"2023-06-13T09:51:19.659Z","updatedAt":"2023-07-02T06:55:25.190Z","__v":0,"date_of_birth":"2000-12-13T17:00:00.000Z","name":"Bui Quoc Dat test","address":"29 tuệ tĩnh - plieku - gia lai123","avatar":"de4e05e4-622e-4990-8b56-808e54d01723.png","phone":"09052985"}'

beforeEach(() => {
  localStorage.clear()
})

describe('access_token', () => {
  it('access_token được set vào localStorage', () => {
    setAccessTokenToLS(access_token)
    expect(getAccessTokenFromLS()).toBe(access_token)
  })
})

describe('refresh_token', () => {
  it('refresh_token được set vào localStorage', () => {
    setRefreshTokenToLS(refresh_token)
    expect(getRefreshTokenFromLS()).toEqual(refresh_token)
  })
})

describe('clearLS', () => {
  it('xóa hết access_token, refresh_token, profile', () => {
    setRefreshTokenToLS(refresh_token)
    setAccessTokenToLS(access_token)
    // setProfile tại đây
    // ...
    clearLS()
    expect(getAccessTokenFromLS()).toBe('')
    expect(getRefreshTokenFromLS()).toBe('')
  })
})
