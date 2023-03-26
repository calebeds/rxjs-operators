import { add, sampleData } from "./helpers";

import { pluck, switchMap } from "rxjs/operators";

sampleData.pipe(pluck("company", "name")).subscribe(add.li);
