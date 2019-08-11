import { Builder } from './Builder'
import { cardApi } from './helpers/Card'


const eventAddToBasked = new Event('click');



const builder = new Builder();
//navbar-nav ul Home Amount Total
const text1 = builder.createNewElement('span', 'Amount');
const text2 = builder.createNewElement('span', ' Total');
const badgeAmount = builder.createNewElement('span', '0', 'badge badge-primary', [{ name: 'id', value: 'badgeAmount' }]);

const badgeTotal = builder.createNewElement('span', '$0', 'badge badge-primary', [{ name: 'id', value: 'badgeTotal' }]);

const homeLink = builder.createNewElement('a', 'Home', 'nav-link', [{ name: 'href', value: '#' }]);
const cardLink = builder.createNewElement('a', [text1, badgeAmount, text2, badgeTotal], 'nav-link', [
    { name: 'href', value: '#' },
    { name: 'data-toggle', value: 'modal' },
    { name: 'data-target', value: '.bd-example-modal-xl' },
]);

const liItem1 = builder.createNewElement('li', [homeLink], 'nav-item');
const liItem2 = builder.createNewElement('li', [cardLink], 'nav-item mr-10');

const ul = builder.createNewElement('ul', [liItem1, liItem2], 'navbar-nav offset-md-9');
//navbar-nav ul Home Amount Total

// modal

//----modal-content

// ---------modal-Header
const spanModalClose = builder.createNewElement('span', 'x', '',[{name: 'aria-hidden', value: 'true' }])
const buttonClose  = builder.createNewElement('button', [spanModalClose], 'close',[
    { name: 'type', value: 'button' },
    { name: 'data-dismiss', value: 'modal' },
    { name: 'aria-hidden', value: 'true' },
    
]);

const modalH5  = builder.createNewElement('h4', 'Items in the basket', 'modal-title',[
{ name: 'id', value: 'exampleModalLabel' },]);
const modalHeader  = builder.createNewElement('div',[modalH5,buttonClose], 'modal-header');
// ---------modal-Header

// ---------modal_Body

// ---------modal_Body

//----modal-content

const modalContent = builder.createNewElement('div', [modalHeader], 'modal-content');
const modalDialog = builder.createNewElement('div', [modalContent], 'modal-dialog modal-xl');
export const modal = builder.createNewElement('div', [modalDialog], 'modal fade bd-example-modal-xl', [
    { name: 'tabindex', value: '-1' },
    { name: 'role', value: 'dialog' },
    { name: 'aria-labelledby', value: 'myExtraLargeModalLabel' },
    { name: 'aria-hidden', value: 'true' },
]);

// modal 


const collapse = builder.createNewElement('div', [ul], 'collapse navbar-collapse', [{ name: 'id', value: 'navbarSupportedContent' }]);

const navbarTogglerIcon = builder.createNewElement('span', null, 'navbar-toggler-icon');
const button = builder.createNewElement('button', [navbarTogglerIcon], 'navbar-toggler', [
    { name: 'data-toggle', value: 'collapse' },
    { name: 'data-target', value: '#navbarSupportedContent' },
    { name: 'aria-controls', value: 'navbarSupportedContent' },
    { name: 'aria-expanded', value: 'false' },
    { name: 'aria-label', value: 'Toggle navigation' },
]);

const brandLink = builder.createNewElement('a', 'Logo', 'navbar-brand offset-md-1', [{ name: 'href', value: '#' }]);

export const nav = builder.createNewElement('nav', [brandLink, button, collapse, ], 'navbar navbar-expand-lg navbar-dark fixed-top bg-dark');

{

    // <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Extra large modal</button>


    //     <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    //   <div class="modal-dialog modal-xl">
    //     <div class="modal-content">
    //       ...
    //     </div>
    //   </div>
    // </div>
}