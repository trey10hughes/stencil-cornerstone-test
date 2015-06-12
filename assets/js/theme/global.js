import $ from 'jquery';
import PageManager from '../page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';

export default class Global extends PageManager {
    constructor() {
        super();
    }

    /**
     * You can wrap the execution in this method with an asynchronous function map using the async library
     * if your global modules need async callback handling.
     * @param next
     */
    loaded(next) {
        quickSearch();
        currencySelector();
        foundation();
        quickView();
        cartPreview();
        next();
    }
}
