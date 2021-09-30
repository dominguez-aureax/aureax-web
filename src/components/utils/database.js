import Firebase from '../../firebase';

class Database {
  constructor() {
    this.db = Firebase.firestore();
  }

  async getCompany(companyName) {
    const response = this.db.collection('companies').doc(companyName);
    const data = await response.get();
    console.log(`DATABASE --- ${data}`);
    return data;
  }

  async getMembers() {
    let users = [];
    this.db
      .collection('users')
      .get()
      .then((snapshot) => {
        snapshot.forEach((user) => users.push(user));
      });

    return users;
  }

  async getDatabase() {
    return this.db;
  }
}

export default Database;
