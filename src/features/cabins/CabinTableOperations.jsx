import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperarions from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperarions>
      <Filter
        filferField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "sort by name (A-Z)" },
          { value: "name-desc", label: "sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "sort by price (low first)" },
          { value: "regularPrice-desc", label: "sort by price (high first)" },
          { value: "maxCapacity-asc", label: "sort by capacity (low first)" },
          { value: "maxCapacity-desc", label: "sort by capacity (high first)" },
        ]}
      />
    </TableOperarions>
  );
}

export default CabinTableOperations;
