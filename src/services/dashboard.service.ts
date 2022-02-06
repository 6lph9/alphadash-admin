import axios from 'axios'

export default new class DashboardService {
  public async getAllLicenses (clientId: string): Promise<any> {
    try {
      const res = await axios.get(
        process.env.VUE_APP_API_URL + '/licenses',
        {
          withCredentials: true,
          headers: { 'X-TENANT-ID': clientId }
        }
      )

      if (!res.data || res.status >= 300) throw res
      return res.data
    } catch (error) {
      console.log('ERROR getting all Licenses')
      throw error
    }
  }

  /*
  public async getAdmin () {
    try {
      const { data } = await axios.get(
        process.env.VUE_APP_API_URL + ''
      )
    } catch (error) {
    }
  }
  */

  public async getAdmin () {
    try {
      const { data } = await axios.get(
        process.env.VUE_APP_API_URL + '/auth/admin/@me',
        {
          withCredentials: true
        }
      )

      if (!data) throw new Error('No Admin')
      return data
    } catch (error) {
      console.log('ERROR getting Admin')
      throw error
    }
  }

  public async getClient (id: string) {
    try {
      const { data } = await axios.get(
        process.env.VUE_APP_API_URL + '/client/id/' + id,
        {
          withCredentials: true
        }
      )

      if (!data) throw new Error('No Client')
      return data
    } catch (error) {
      console.log('ERROR getting Client')
      throw error
    }
  }
}()
