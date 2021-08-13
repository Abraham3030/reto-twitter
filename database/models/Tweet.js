module.exports = function(sequelize, dataTypes) {
    let alias = "Tweet"; // Nomre de la tala
    let cols = { // Nombre las las colunmas
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncement: true
        },
        user_id: {
            type: dataTypes.INTEGER
        },
	contenido: {
            type: dataTypes.STRING
        }
    }

    let config = { // Configuracion a la base de datos referenciando en nombre de la tabla y los timestamps en falso
        tableName: "tweet",
        timestamps: false
    }

    // Configuracion de la tabla Usuario con sequelize 
    let Tweet = sequelize.define(alias, cols, config);
    Tweet.associate = function(models){
        Tweet.belongsTo(
            models.Usuario,
            {
                as: 'tweets',
                foreignKey:'user_id'
            }
        )
    }
    return Tweet;
}