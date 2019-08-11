import 'bootstrap/dist/css/bootstrap.min.css';
import {cardApi} from './helpers/Card'
import {Fetch} from './Fetch';
import {nav, modal} from './NavBar'

import {BuilderProduct} from './BuilderProduct';
import {BuilderLayouts} from './BuilderLayouts';
import {events} from './events'

const layout = new BuilderLayouts({});

Fetch.get('https://zloyleva-imt.github.io/store_js_vanila/src/data.json')
    .then(res => {
        const htmlArr = res.data.map(el => {
            return new BuilderProduct(el).createSingleCart()
        })
        layout.render('app',layout.createContainer(htmlArr));
      
    });

const initialStore = [];

cardApi.writeToStorage(initialStore)
//modal
layout.render('app',modal);
layout.render('app',nav);




