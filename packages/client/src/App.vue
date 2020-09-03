<template>
    <div id="app">
        <b-container>
            <b-nav>
                <b-nav-item>
                    <router-link to="/">Home</router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link to="/about">About</router-link>
                </b-nav-item>
            </b-nav>
            <router-view/>
        </b-container>
    </div>
</template>
