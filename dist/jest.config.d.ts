declare const _default: {
    clearMocks: boolean;
    collectCoverage: boolean;
    coverageDirectory: string;
    coverageProvider: string;
    globals: {
        'ts-jest': {
            tsConfig: string;
            diagnostics: {
                ignoreCodes: string[];
            };
        };
    };
    testEnvironment: string;
    transform: {
        '^.+\\.tsx?$': string;
    };
};
export default _default;
