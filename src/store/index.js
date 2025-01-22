import { createStore } from 'vuex';

const store = createStore({
  state() {
    // Load memories from localStorage, or use default values if none exist
    const storedMemories = localStorage.getItem('memories');
    return {
      memories: storedMemories ? JSON.parse(storedMemories) : [
        {
            id: "m1",
            image: "https://promotions.co.th/wp-content/uploads/2022/05/moraine-lake.jpg",
            title: "การท่องเที่ยว",
            description: "การท่องเที่ยวต่างประเทศ"
          },
          {
            id: "m2",
            image: "https://blog.wu.ac.th/wp-content/uploads/2023/09/0000000.jpg",
            title: "การออกกำลังกาย",
            description: "ออกำลังกายเป็นกลุ่ม"
          },
          {
            id: "m3",
            image: "https://scontent-bkk1-1.xx.fbcdn.net/v/t1.6435-9/65428661_508084763265188_1383667132230795264_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHPnwqjvcZ-fGNuYtsnBzot2IXGtmGijGPYhca2YaKMY2n9YAXxBgurhnE0acOWlD1B1caR9WN1QLedBvv-bUpm&_nc_ohc=lb7d_LZ_Q58Q7kNvgH5XCwQ&_nc_zt=23&_nc_ht=scontent-bkk1-1.xx&_nc_gid=AbWn5_WdOBLTgMRjIMf62IX&oh=00_AYCk-y6T2vWmFnRqamwbXY5fUTPZnj7ff-uLLTAASmCOeQ&oe=6789F947",
            title: "การนอน",
            description: "ท่านอนพิศดาร"
          },
          {
            id: "m4",
            image: "https://s.isanook.com/sp/0/ui/226/1131217/117990402_1242604059411721_6710144027319107151_n.jpg",
            title: "การใช้จ่ายเงิน",
            description: "ใช้เงินเเบบจุกๆ"
          },
      ] 
    } // Default memories if localStorage is empty
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
      // Persist the updated memories list to localStorage
      localStorage.setItem('memories', JSON.stringify(state.memories));
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memoryById(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;