import axios from './axios'

// 登录
const searchesHotWords = (params) => axios({
  url: '/v2/searches/hot_words',
  method: 'get',
  params: params
})

export default {
  searchesHotWords
}