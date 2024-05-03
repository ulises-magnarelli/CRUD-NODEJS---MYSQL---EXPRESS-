module.exports = {

    obtain: function (connection, funcion) {
        connection.query('SELECT * FROM books', funcion);
    },


    insert: function (connection, data, archives ,funcion) {
        connection.query('INSERT INTO books ( name, image) VALUES (?,?)', [data.name, archives.filename] , funcion);
    },


    returnDataByID: function (connection, id, funcion) {
        connection.query('SELECT * FROM books WHERE id=?', [id], funcion);
    },


    delete: function (connection, id, funcion) {
        connection.query('DELETE FROM books WHERE id=?', [id], funcion);
    },


    update: function (connection, data, funcion) {
        connection.query('UPDATE books SET name=? WHERE id=?', [data.name, data.id], funcion);
    },


    updateArchive: function (connection, data, archive,funcion) {
        connection.query('UPDATE books SET image=? WHERE id=?', [archive.filename, data.id], funcion);
    },
}