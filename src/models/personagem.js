import Sequelize from 'sequelize'
import { connection } from '../database/connection.js'

export const personagens_table = connection.define('personagens_table', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nome:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    cla:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    vila:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    idade:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    altura:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    peso:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    sexo:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    patente:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    transformacao:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    imagem:{
        type: Sequelize.TEXT,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    createAt: false,
    updateAt: false,
    timestamps: false,
}
)