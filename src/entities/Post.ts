class Post {
  public text: string;

  public author: string;

  public date: Date;

  public customId: string;

  constructor(text: string, author: string, date: Date, customId: string) {
    this.text = text;
    this.author = author;
    this.date = date;
    this.customId = customId;
  }
}

export default Post;
