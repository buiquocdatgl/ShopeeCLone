import { describe, expect, it, beforeEach } from 'vitest'
import http, { Http } from '../http'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { setAccessTokenToLS, setRefreshTokenToLS } from '../auth'

describe('http axios', () => {
  let http = new Http().instance
  beforeEach(() => {
    localStorage.clear()
    http = new Http().instance
  })
  it('Gọi API', async () => {
    // Không nên đụng đến thư mục apis
    // Vì chúng ta test riêng file http thì chỉ "nên" dùng http thôi
    // vì lỡ như thư mục apis có thay đổi gì đó
    // thì cũng không ảnh hưởng gì đến file test này
    const res = await http.get('products')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Auth Request', async () => {
    // Nên có 1 cái account test chu khong phai account chinh
    // và 1 server test
    await http.post('login', {
      email: 'staspi2025@gmail.com',
      password: '123456'
    })
    const res = await http.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  //
  //   it('Refresh Token', async () => {
  //     setAccessTokenToLS(access_token_1s)
  //     setRefreshTokenToLS(refresh_token_1000days)
  //     const httpNew = new Http().instance
  //     const res = await httpNew.get('me')
  //     expect(res.status).toBe(HttpStatusCode.Ok)
  //   })
})
