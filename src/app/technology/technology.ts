export class Technology {
    order: number;
    name: string;
    description: string;
    comment: string;
    skilllevel: string;

    constructor(order: number, name: string, description: string, comment: string, skilllevel: string) {
        this.order = order;
        this.name = name;
        this.description = description;
        this.comment = comment;
        this.skilllevel = skilllevel;     
    }
}