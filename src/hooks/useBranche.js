import { ref, onMounted } from 'vue'
import { api } from '@/api'

const branches = ref([])

//breach字典hook
export default function useBranch() {
  onMounted(() => {
    getBranches()
  })

  function getBranches() {
    //如果有数据就不请求
    if (branches.value.length > 0) {
      return
    }
    let params = {
      page: 1,
      page_size: 100,
    }
    if (search) {
      params.search = search
    }
    const { err, data } = api.branches(params)
    if (!err) {
      branches.value = data
    }
  }

  return {
    branches,
  }
}

