import { useState } from '#imports'
import { IStatus } from '~/core/types'
import { apiFetchHelper } from '~/core/api/apiPageHelper'

export const useVideos = () => {
  const fetchStatus = useState<IStatus>('videos_status', () => ({
    isError: false,
    isSuccess: false,
    isLoading: true,
    isLoaded: false,
    errorData: null
  }))

  const fetchItems = useState<any[]>('videos_items', () => ([]))
  const fetchOptions = useState<any>('videos_options', () => ({}))

  const fetch = async (page: number = 1, query: string = '') => {
    await apiFetchHelper(
      () => ({
        status: fetchStatus.value,
        items: fetchItems.value,
        options: fetchOptions.value
      }),
      (data) => {
        fetchStatus.value = data
      },
      (data) => {
        fetchOptions.value = data
      },
      (data) => {
        fetchItems.value = data
      },
      page,
      query,
      {
        baseURL: 'https://api.anyaox.com/videos'
      }
    )
  }

  const search = (q: string) => {
    fetch(1, q)
  }

  return {
    fetchItems,
    fetchStatus,
    fetchOptions,
    fetch,
    search
  }
}
