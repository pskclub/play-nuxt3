import { reactive } from '#imports'
import { apiFetchHelper } from '~/core/api/apiPageHelper'

export const useVideos = () => {
  const fetch = reactive({
    status: {
      isError: false,
      isSuccess: false,
      isLoading: true,
      isLoaded: false,
      errorData: null
    },
    items: [],
    options: {}
  })

  const get = async (page: number = 1, query: string = '') => {
    await apiFetchHelper(
      () => ({
        status: fetch.status,
        items: fetch.items,
        options: fetch.options
      }),
      (data) => {
        fetch.status = data
      },
      (data) => {
        fetch.options = data
      },
      (data) => {
        fetch.items = data
      },
      page,
      query,
      {
        baseURL: 'https://api.anyaox.com/videos'
      }
    )
  }

  const search = (q: string) => {
    get(1, q)
  }

  return {
    fetch,
    get,
    search
  }
}
