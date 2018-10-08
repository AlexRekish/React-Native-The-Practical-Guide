const generateId = name => name + +new Date() + Math.floor(Math.random() * 10000000);

export default generateId;
