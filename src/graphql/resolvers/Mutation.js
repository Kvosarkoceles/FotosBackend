import Message from "../../models/Message";

import User from "../../models/User";

const Mutation = {
  createMessage: async (_, { title, content, author }) => {
    const newMessage = new MesUssage({ title, content, author });
    return await newMessage.save();
  },
  createUser: async (_, { name, username, password }) => {
    const newUser = new User({ name, username, password });
    return await newUser.save();
  }
};

export default Mutation;