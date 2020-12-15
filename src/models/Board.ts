import {Column, Model, Table} from "sequelize-typescript"

@Table
export class Board extends Model{
    @Column
    title: string | undefined ;

    @Column
    content: string | undefined;

    @Column
    writer: string | undefined;
}