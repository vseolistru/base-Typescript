import styles from './Search.module.scss';
import {ReactComponent as SearchIcon} from 'assets/icon-search.svg'
import React, {} from "react";
import {Button} from "../Button";

interface SearchProps {
    hasError: boolean;
    onSubmit: (text:string) => void;
}
type FormFields = {
    username: HTMLInputElement
}
export const Search = ({ hasError, onSubmit }: SearchProps) => {

    const handleSubmit = (e:React.FormEvent <HTMLFormElement & FormFields>) => {
        e.preventDefault()
        const text = e.currentTarget.username.value
        if (text.trim()) {
            onSubmit(text)
            e.currentTarget.reset()
        }
    }



    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <div>
                <label htmlFor='search' className={styles.label}>
                    <SearchIcon/>
                    <input className={styles.textField}
                           type="text"
                           id='search'
                           name="username"
                           placeholder='Search Github user'/>
                    {hasError && (
                        <div className={styles.error}>No result</div>
                    )}
                    <Button>Search</Button>
                </label>
            </div>
        </form>
    );
}
