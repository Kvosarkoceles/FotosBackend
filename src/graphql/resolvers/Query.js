import Message from "../../models/Message";
import User from "../../models/User";

const Query = {
  ping() {
    return "pong";
  },
  messages: async () => {
    return await Message.find();
  }
  ,
  users: async () => {
    return await User.find();
  }
};

export default Query;