package com.readers.jikji.config;

public class WebMvcMapping {

    public class URL {

        public static final String OAUTH            = "/oauth";

        /* Role */
        public static final String	ROLE_USER		= "/role-user";
        public static final String	ROLE_ADMIN		= "/role-admin";

        /* Request */
        public static final String  BOOK            = "/book";
        public static final String  TRANSLATION     = "/translation";
        public static final String  TASTE           = "/taste";
        public static final String  USER            = "/user";

        private URL() {

        }
    }

    private WebMvcMapping() {

    }

}
