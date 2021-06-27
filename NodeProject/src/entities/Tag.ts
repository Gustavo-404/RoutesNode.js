import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("tags")
class Tag {

    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    constructor() {
        if (!this.id) { //Verifica se o id não esta preenchido
            this.id = uuid();
        }
    }

}

export { Tag }