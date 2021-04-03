type UserListProps = {
  children: any;
};

export const UserList = (props: UserListProps) => (
  <table>
    <thead>
      <tr>
        <th>nom</th>
        <th>prénom</th>
        <th>email</th>
        <th>Date de création</th>
        <th>Date de mis à jour</th>
        <th colSpan={2}>action</th>
      </tr>
    </thead>
    <tbody>{props.children}</tbody>
  </table>
);
