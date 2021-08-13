module.exports = function(sequelize, dataTypes) {
    let alias = "Usuario"; // Nomre de la tala
    let cols = { // Nombre las las colunmas
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncement: true
        },
        username: {
            type: dataTypes.STRING
        },
	mail: {
            type: dataTypes.STRING
        },
	constraseña: {
            type: dataTypes.STRING
        },
    tweet_id: {
        type: dataTypes.INTEGER
    }

    }

    let config = { // Configuracion a la base de datos referenciando en nombre de la tabla y los timestamps en falso
        tableName: "usuario",
        timestamps: false
    }

    // Configuracion de la tabla Usuario con sequelize 
    let Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function(models){
        Usuario.hasMany(
            models.Tweet,
            {
                as: 'usuarios',
                foreignKey:'tweet_id'
            }
        )
    }

    return Usuario;
}


