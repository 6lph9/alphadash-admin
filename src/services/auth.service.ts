import axios from 'axios'

export default new class AuthService {
  public async isAdmin (): Promise<boolean> {
    try {
      const { data } = await axios.get(
        process.env.VUE_APP_API_URL + '/auth/team',
        { withCredentials: true }
      )

      if (data === true) return true
      return false
    } catch (error) {
      return false
    }
  }

  public async isLoggedIn (): Promise<boolean> {
    try {
      const { data } = await axios.get(
        process.env.VUE_APP_API_URL + '/auth/@me',
        { withCredentials: true }
      )

      if (data) return true
      return false
    } catch (error) {
      return false
    }
  }
}()
