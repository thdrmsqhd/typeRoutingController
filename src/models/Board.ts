import {Column, DataType, Model, Table} from "sequelize-typescript"

@Table
export class Board extends Model{
    @Column(DataType.STRING)
    title: string | undefined ;

    @Column(DataType.STRING)
    content: string | undefined;

    @Column(DataType.STRING)
    writer: string | undefined;
}