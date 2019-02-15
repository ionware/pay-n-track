const express = require('express');

class App {
    constructor() {
        this.app = express();
    }

    /**
     * Sets the view engine and path to use for views.
     * @param {string} engine 
     * @param {string} resolvedPath 
     */
    setView(engine, resolvedPath) {
        this.app.set('view engine', engine);
        this.app.set('views', resolvedPath);
    }

    /**
     * Register specific middleware for the app.
     * @param {function} callback 
     */
    middleware(callback) {
        this.app.use(callback);
    }

    /**
     * Expose the Express get middleware
     * @param {string} url 
     * @param {function} handler 
     */
    get(url, handler) {
        this.app.get(url, handler);
    }

    /**
     * Expose express post middleware
     * @param {string} url 
     * @param {function} handler 
     */
    post(url, handler) {
        this.app.post(url, handler);
    }

    /**
     * Expose the put middleware of express
     * @param {string} url 
     * @param {function} handler 
     */
    put(url, handler) {
        this.app.put(url, handler);
    }

    /**
     * Expose the patch middleware of express.
     * @param {string} url 
     * @param {function} handler 
     */
    patch(url, handler) {
        this.app.patch(url, handler);
    }

    /**
     * Expose the delete middleware of express.
     * @param {string} url 
     * @param {function} handler 
     */
    delete(url, handler) {
        this.app.delete(url, handler);
    }

    start(port, callback) {
        if (!callback) {
            callback = () => {
                console.log(`Server started on http://127.0.0.1:${port}`);
            }
        }
        this.app.listen(port, callback);
    }
}


module.exports = function() {
    return new App();
}