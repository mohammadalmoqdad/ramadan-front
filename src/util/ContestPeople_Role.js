export const Role = Object.freeze({
    MEMBER : 1,
    ADMIN : 2,
    SUPER_ADMIN : 3,
    PENDING : 4,
    DEACTIVATED : 5
});

export const isSuperAdmin = (context) => {
    return Role.SUPER_ADMIN === context?.adminInfo?.contest?.role
}