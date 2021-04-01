import { Injectable } from '@nestjs/common';
import { IOutgoingMoney } from 'src/model/ICashout.model';

const outgoingMoney: IOutgoingMoney[] = [
    {
        id: 1,
        name: 'Subway',
        value: 80.5,
        name_group: 'food',
        createdAt: new Date()
    },
    {
        id: 2,
        name: 'Mac',
        value: 52.1,
        name_group: 'food',
        createdAt: new Date()
    },
    {
        id: 3,
        name: 'Mercado Extra',
        value: 160.8,
        name_group: 'outros',
        createdAt: new Date()
    },
]
@Injectable()
export class IndexService {


    validApi(): string {
        return 'Okay';
    }

    getOutgoingMoney() {
        let total = 0;
        outgoingMoney.forEach(cashout => {
            total += cashout.value;
        })

        return {...outgoingMoney, ...{ totalValue: total }};
    }

    createCashOut(body: IOutgoingMoney) {
        let id = 0;
        outgoingMoney.forEach(element => {
            if (element.id > id) {
                id = element.id;
            }
        });
        body.id = id + 1;
        body.createdAt = new Date();
        outgoingMoney.push(body);
        return body;
    }
}



