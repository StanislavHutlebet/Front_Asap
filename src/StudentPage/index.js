import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                <div className="button">
                    <button type="button" class="btn btn-outline-light btn-block">Перегляд оцінок</button>
                    <button type="button" class="btn btn-outline-light btn-block">Перегляд Відвідування</button>
                    <button type="button" class="btn btn-outline-light btn-block">Перегляд домашного завдання</button>
                </div>
            </div>
        )
    }
}
