import React from 'react';

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    onPageChange: (page: number) => void
    currentPage: number
}

type PaginatorStateType = {
    maxCurrentPage: number,
    minCurrentPage: number,
    step: number
}

export class Paginator extends React.Component<PaginatorPropsType, PaginatorStateType> {

    constructor(props: PaginatorPropsType) {
        super(props);
        this.state = {
            maxCurrentPage: 10,
            minCurrentPage: 1,
            step: 5
        }
    }

    render() {
        const pages: number[] = []

        for (let i = this.state.minCurrentPage; i <= this.state.maxCurrentPage; i++) {
            pages.push(i)
        }

        const nextPagesUsers = (isDirection: boolean) => {
            if (isDirection) {
                this.setState((state) => ({
                    minCurrentPage: state.minCurrentPage + state.step,
                    maxCurrentPage: state.maxCurrentPage + state.step
                }))
            } else {
                this.state.minCurrentPage > this.state.step &&
                this.setState((state) => ({
                    minCurrentPage: state.minCurrentPage - state.step,
                    maxCurrentPage: state.maxCurrentPage - state.step
                }))
            }
        }
        return (
        <div>
            <button onClick={() => nextPagesUsers(false)}>{'<'}</button>
            {pages.map(el => {
                return <button key={el} onClick={() => this.props.onPageChange(el)}>{el}</button>

            })}
            <button onClick={() => nextPagesUsers(true)}>{'>'}</button>
        </div>
        )
    }
}
