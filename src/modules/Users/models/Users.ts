import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table({
  tableName: "users",
})
export default class Users extends Model<Users> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  mobileNumber: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  profileImg: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  oauthThrough: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  token: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  deviceToken: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  otp: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  totalKudos: number;
}
