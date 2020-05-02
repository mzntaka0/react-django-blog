export const ADMIN_USER_TABLE_COLUMNS = [
    {
        label: 'id',
        accessor: 'id',
        type: 'hidden',
        editable: true,
        showOnDelete: false,
        formLength: 'full',
        hideOnDisplay: true,
    },
    {
        label: 'Icon',
        accessor: 'profile_img',
        type: 'image',
        editable: true,
        showOnDelete: false,
        formLength: 'full',
    },
    {
        label: 'First Name',
        accessor: 'first_name',
        type: 'text',
        editable: true,
        formLength: '1/2',
        showOnDelete: true,
    },
    {
        label: 'Last Name',
        accessor: 'last_name',
        type: 'text',
        editable: true,
        formLength: '1/2',
        showOnDelete: true,
    },
    {
        label: 'Email',
        accessor: 'email',
        type: 'text',
        searchType: 'equal',
        editable: true,
        formLength: 'full',
        showOnDelete: true,
    },
    {
        label: "staff",
        accessor: "is_staff",
        type: 'boolean',
        editable: true,
        formLength: 'full',
        showOnDelete: true,
    },
    {
        label: "super admin",
        accessor: "is_superuser",
        type: 'boolean',
        editable: true,
        formLength: 'full',
        showOnDelete: false,
    },
    {
        label: 'Registered at',
        accessor: 'created_at',
        type: 'date',
        editable: false,
        showOnDelete: false,
    }
];

export const ADMIN_POST_TABLE_COLUMNS = [
    {
        label: 'id',
        accessor: 'id',
        type: 'hidden',
        editable: true,
        showOnDelete: false,
        formLength: 'full',
        hideOnDisplay: true,
    },
    {
        label: 'title',
        accessor: 'title',
        type: 'text',
        editable: true,
        showOnDelete: true,
        formLength: 'full',
        hideOnDisplay: false,
    },
    {
        label: 'excerpt',
        accessor: 'excerpt',
        type: 'text',
        editable: true,
        showOnDelete: true,
        formLength: 'full',
        hideOnDisplay: false,
    },
    {
        label: 'category',
        accessor: 'category',
        type: 'select',
        editable: true,
        showOnDelete: true,
        formLength: '1/2',
        hideOnDisplay: false,
        nested: true,
        displayField: 'name',
    },
    {
        label: 'post state',
        accessor: 'post_state',
        type: 'select',
        editable: true,
        showOnDelete: true,
        formLength: '1/2',
        hideOnDisplay: false,
        nested: true,
        displayField: 'name',
    },
    {
        label: 'content',
        accessor: 'content',
        type: 'text',
        editable: true,
        showOnDelete: false,
        formLength: 'full',
        hideOnDisplay: true,
    },
    {
        label: 'tags',
        accessor: 'tags',
        type: 'text',
        editable: true,
        showOnDelete: true,
        formLength: '1/2',
        hideOnDisplay: false,
        multiple: true,
        nested: true,
        displayField: 'name',
        isTag: true,
    },
    {
        label: 'youtube url',
        accessor: 'youtube_url',
        type: 'text',
        editable: true,
        showOnDelete: false,
        formLength: '1/2',
        hideOnDisplay: true,
    },
    {
        label: 'likes',
        accessor: 'total_likes',
        type: 'text',
        editable: false,
        showOnDelete: false,
        formLength: 'full',
        hideOnDisplay: true,
    },
    {
        label: 'meta description',
        accessor: 'meta_desc',
        type: 'text',
        editable: true,
        showOnDelete: false,
        formLength: 'full',
        hideOnDisplay: true,
    },
    {
        label: 'main image',
        accessor: 'main_img',
        type: 'image',
        editable: true,
        showOnDelete: false,
        formLength: '1/2',
        hideOnDisplay: true,
        nested: true,
        displayField: 'file',
    },
    {
        label: 'created at',
        accessor: 'created_at',
        type: 'date',
        editable: false,
        showOnDelete: false,
        hideOnDisplay: false,
    },
    {
        label: 'published at',
        accessor: 'published_at',
        type: 'date',
        editable: false,
        showOnDelete: false,
        hideOnDisplay: false,
    },
    {
        label: 'author',
        accessor: 'user',
        type: 'select',
        editable: false,
        showOnDelete: true,
        hideOnDisplay: false,
        nested: true,
        displayField: 'first_name'
    },
];