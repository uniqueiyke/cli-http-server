declare const errors: {
    code: string;
    message: string;
    statusCode: number;
    statusMessage: string;
}[];
declare const parseError: (err: any) => {
    message: string;
    statusCode: number;
    statusMessage: string;
};
export { errors, parseError };
//# sourceMappingURL=errors.d.ts.map