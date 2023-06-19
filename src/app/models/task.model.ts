import { Contact } from './contact.model';
import { Deserializable } from './deserialize.model';

export class Task implements Deserializable {
  _id: string;
  user: string;
  due_date: Date;
  content: string;
  contact: string;
  status: number;
  reminder: number;
  reminder_type: string;
  type: string;
  set_recurrence: boolean;
  recurrence_mode: number;
  created_at: Date;
  updated_at: Date;
  deserialize(input: any): this {
    return Object.assign(this, input);
  }
  constructor() {
    this.type = 'task';
  }
}

export class TaskDetail implements Deserializable {
  _id: string;
  user: string;
  due_date: Date;
  content: string;
  contact: Contact;
  status: number;
  reminder: number;
  reminder_type: string;
  type: string;
  set_recurrence: boolean;
  recurrence_mode: number;
  created_at: Date;
  updated_at: Date;
  deserialize(input: any): this {
    Object.assign(this, input);
    if (!input.contact) {
      this.contact = new Contact();
      return this;
    }
    if (input.contact instanceof Array) {
      this.contact = new Contact().deserialize(input.contact[0]);
    } else {
      this.contact = new Contact().deserialize(input.contact);
    }
    return this;
  }
}
