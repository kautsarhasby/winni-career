
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Applicants
 * 
 */
export type Applicants = $Result.DefaultSelection<Prisma.$ApplicantsPayload>
/**
 * Model Jobs
 * 
 */
export type Jobs = $Result.DefaultSelection<Prisma.$JobsPayload>
/**
 * Model Resumes
 * 
 */
export type Resumes = $Result.DefaultSelection<Prisma.$ResumesPayload>
/**
 * Model InterviewSchedules
 * 
 */
export type InterviewSchedules = $Result.DefaultSelection<Prisma.$InterviewSchedulesPayload>
/**
 * Model ApplicantJobs
 * 
 */
export type ApplicantJobs = $Result.DefaultSelection<Prisma.$ApplicantJobsPayload>
/**
 * Model Notifications
 * 
 */
export type Notifications = $Result.DefaultSelection<Prisma.$NotificationsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  HR: 'HR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const JobLocationType: {
  REMOTE: 'REMOTE',
  ONSITE: 'ONSITE'
};

export type JobLocationType = (typeof JobLocationType)[keyof typeof JobLocationType]


export const EmploymentType: {
  FULLTIME: 'FULLTIME',
  INTERNSHIP: 'INTERNSHIP'
};

export type EmploymentType = (typeof EmploymentType)[keyof typeof EmploymentType]


export const JobStatus: {
  PENDING: 'PENDING',
  REVIEWED: 'REVIEWED',
  REJECTED: 'REJECTED',
  ACCEPTED: 'ACCEPTED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const InterviewMode: {
  OFFLINE: 'OFFLINE',
  ONLINE: 'ONLINE'
};

export type InterviewMode = (typeof InterviewMode)[keyof typeof InterviewMode]


export const ScheduleStatus: {
  CONFIRMED: 'CONFIRMED',
  RESCHEDULED: 'RESCHEDULED',
  CANCELED: 'CANCELED',
  COMPLETED: 'COMPLETED'
};

export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type JobLocationType = $Enums.JobLocationType

export const JobLocationType: typeof $Enums.JobLocationType

export type EmploymentType = $Enums.EmploymentType

export const EmploymentType: typeof $Enums.EmploymentType

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type InterviewMode = $Enums.InterviewMode

export const InterviewMode: typeof $Enums.InterviewMode

export type ScheduleStatus = $Enums.ScheduleStatus

export const ScheduleStatus: typeof $Enums.ScheduleStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicants`: Exposes CRUD operations for the **Applicants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applicants
    * const applicants = await prisma.applicants.findMany()
    * ```
    */
  get applicants(): Prisma.ApplicantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobs`: Exposes CRUD operations for the **Jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.JobsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resumes`: Exposes CRUD operations for the **Resumes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resumes.findMany()
    * ```
    */
  get resumes(): Prisma.ResumesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interviewSchedules`: Exposes CRUD operations for the **InterviewSchedules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterviewSchedules
    * const interviewSchedules = await prisma.interviewSchedules.findMany()
    * ```
    */
  get interviewSchedules(): Prisma.InterviewSchedulesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicantJobs`: Exposes CRUD operations for the **ApplicantJobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicantJobs
    * const applicantJobs = await prisma.applicantJobs.findMany()
    * ```
    */
  get applicantJobs(): Prisma.ApplicantJobsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.NotificationsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Applicants: 'Applicants',
    Jobs: 'Jobs',
    Resumes: 'Resumes',
    InterviewSchedules: 'InterviewSchedules',
    ApplicantJobs: 'ApplicantJobs',
    Notifications: 'Notifications'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "applicants" | "jobs" | "resumes" | "interviewSchedules" | "applicantJobs" | "notifications"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Applicants: {
        payload: Prisma.$ApplicantsPayload<ExtArgs>
        fields: Prisma.ApplicantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantsPayload>
          }
          findFirst: {
            args: Prisma.ApplicantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantsPayload>
          }
          findMany: {
            args: Prisma.ApplicantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantsPayload>[]
          }
          create: {
            args: Prisma.ApplicantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantsPayload>
          }
          createMany: {
            args: Prisma.ApplicantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantsPayload>[]
          }
          delete: {
            args: Prisma.ApplicantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantsPayload>
          }
          update: {
            args: Prisma.ApplicantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantsPayload>
          }
          deleteMany: {
            args: Prisma.ApplicantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantsPayload>[]
          }
          upsert: {
            args: Prisma.ApplicantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantsPayload>
          }
          aggregate: {
            args: Prisma.ApplicantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicants>
          }
          groupBy: {
            args: Prisma.ApplicantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicantsCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicantsCountAggregateOutputType> | number
          }
        }
      }
      Jobs: {
        payload: Prisma.$JobsPayload<ExtArgs>
        fields: Prisma.JobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          findFirst: {
            args: Prisma.JobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          findMany: {
            args: Prisma.JobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>[]
          }
          create: {
            args: Prisma.JobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          createMany: {
            args: Prisma.JobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>[]
          }
          delete: {
            args: Prisma.JobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          update: {
            args: Prisma.JobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          deleteMany: {
            args: Prisma.JobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>[]
          }
          upsert: {
            args: Prisma.JobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          aggregate: {
            args: Prisma.JobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobs>
          }
          groupBy: {
            args: Prisma.JobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobsCountArgs<ExtArgs>
            result: $Utils.Optional<JobsCountAggregateOutputType> | number
          }
        }
      }
      Resumes: {
        payload: Prisma.$ResumesPayload<ExtArgs>
        fields: Prisma.ResumesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumesPayload>
          }
          findFirst: {
            args: Prisma.ResumesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumesPayload>
          }
          findMany: {
            args: Prisma.ResumesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumesPayload>[]
          }
          create: {
            args: Prisma.ResumesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumesPayload>
          }
          createMany: {
            args: Prisma.ResumesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumesPayload>[]
          }
          delete: {
            args: Prisma.ResumesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumesPayload>
          }
          update: {
            args: Prisma.ResumesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumesPayload>
          }
          deleteMany: {
            args: Prisma.ResumesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumesPayload>[]
          }
          upsert: {
            args: Prisma.ResumesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumesPayload>
          }
          aggregate: {
            args: Prisma.ResumesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResumes>
          }
          groupBy: {
            args: Prisma.ResumesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumesCountArgs<ExtArgs>
            result: $Utils.Optional<ResumesCountAggregateOutputType> | number
          }
        }
      }
      InterviewSchedules: {
        payload: Prisma.$InterviewSchedulesPayload<ExtArgs>
        fields: Prisma.InterviewSchedulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterviewSchedulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSchedulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterviewSchedulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSchedulesPayload>
          }
          findFirst: {
            args: Prisma.InterviewSchedulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSchedulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterviewSchedulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSchedulesPayload>
          }
          findMany: {
            args: Prisma.InterviewSchedulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSchedulesPayload>[]
          }
          create: {
            args: Prisma.InterviewSchedulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSchedulesPayload>
          }
          createMany: {
            args: Prisma.InterviewSchedulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterviewSchedulesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSchedulesPayload>[]
          }
          delete: {
            args: Prisma.InterviewSchedulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSchedulesPayload>
          }
          update: {
            args: Prisma.InterviewSchedulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSchedulesPayload>
          }
          deleteMany: {
            args: Prisma.InterviewSchedulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterviewSchedulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterviewSchedulesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSchedulesPayload>[]
          }
          upsert: {
            args: Prisma.InterviewSchedulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterviewSchedulesPayload>
          }
          aggregate: {
            args: Prisma.InterviewSchedulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterviewSchedules>
          }
          groupBy: {
            args: Prisma.InterviewSchedulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterviewSchedulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterviewSchedulesCountArgs<ExtArgs>
            result: $Utils.Optional<InterviewSchedulesCountAggregateOutputType> | number
          }
        }
      }
      ApplicantJobs: {
        payload: Prisma.$ApplicantJobsPayload<ExtArgs>
        fields: Prisma.ApplicantJobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicantJobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantJobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicantJobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantJobsPayload>
          }
          findFirst: {
            args: Prisma.ApplicantJobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantJobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicantJobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantJobsPayload>
          }
          findMany: {
            args: Prisma.ApplicantJobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantJobsPayload>[]
          }
          create: {
            args: Prisma.ApplicantJobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantJobsPayload>
          }
          createMany: {
            args: Prisma.ApplicantJobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicantJobsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantJobsPayload>[]
          }
          delete: {
            args: Prisma.ApplicantJobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantJobsPayload>
          }
          update: {
            args: Prisma.ApplicantJobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantJobsPayload>
          }
          deleteMany: {
            args: Prisma.ApplicantJobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicantJobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicantJobsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantJobsPayload>[]
          }
          upsert: {
            args: Prisma.ApplicantJobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantJobsPayload>
          }
          aggregate: {
            args: Prisma.ApplicantJobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicantJobs>
          }
          groupBy: {
            args: Prisma.ApplicantJobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicantJobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicantJobsCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicantJobsCountAggregateOutputType> | number
          }
        }
      }
      Notifications: {
        payload: Prisma.$NotificationsPayload<ExtArgs>
        fields: Prisma.NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findFirst: {
            args: Prisma.NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findMany: {
            args: Prisma.NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          create: {
            args: Prisma.NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          createMany: {
            args: Prisma.NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          delete: {
            args: Prisma.NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          update: {
            args: Prisma.NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          upsert: {
            args: Prisma.NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    applicants?: ApplicantsOmit
    jobs?: JobsOmit
    resumes?: ResumesOmit
    interviewSchedules?: InterviewSchedulesOmit
    applicantJobs?: ApplicantJobsOmit
    notifications?: NotificationsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    publishedJobs: number
    hrNotifications: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publishedJobs?: boolean | UsersCountOutputTypeCountPublishedJobsArgs
    hrNotifications?: boolean | UsersCountOutputTypeCountHrNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPublishedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountHrNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }


  /**
   * Count Type ApplicantsCountOutputType
   */

  export type ApplicantsCountOutputType = {
    resumes: number
    interviewSchedules: number
    appliedJobs: number
    notifications: number
  }

  export type ApplicantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumes?: boolean | ApplicantsCountOutputTypeCountResumesArgs
    interviewSchedules?: boolean | ApplicantsCountOutputTypeCountInterviewSchedulesArgs
    appliedJobs?: boolean | ApplicantsCountOutputTypeCountAppliedJobsArgs
    notifications?: boolean | ApplicantsCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * ApplicantsCountOutputType without action
   */
  export type ApplicantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantsCountOutputType
     */
    select?: ApplicantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicantsCountOutputType without action
   */
  export type ApplicantsCountOutputTypeCountResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumesWhereInput
  }

  /**
   * ApplicantsCountOutputType without action
   */
  export type ApplicantsCountOutputTypeCountInterviewSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewSchedulesWhereInput
  }

  /**
   * ApplicantsCountOutputType without action
   */
  export type ApplicantsCountOutputTypeCountAppliedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicantJobsWhereInput
  }

  /**
   * ApplicantsCountOutputType without action
   */
  export type ApplicantsCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }


  /**
   * Count Type JobsCountOutputType
   */

  export type JobsCountOutputType = {
    Resumes: number
    interviewSchedules: number
    applicantJobs: number
  }

  export type JobsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Resumes?: boolean | JobsCountOutputTypeCountResumesArgs
    interviewSchedules?: boolean | JobsCountOutputTypeCountInterviewSchedulesArgs
    applicantJobs?: boolean | JobsCountOutputTypeCountApplicantJobsArgs
  }

  // Custom InputTypes
  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobsCountOutputType
     */
    select?: JobsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeCountResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumesWhereInput
  }

  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeCountInterviewSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewSchedulesWhereInput
  }

  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeCountApplicantJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicantJobsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    otp: number | null
  }

  export type UsersSumAggregateOutputType = {
    otp: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    fullname: string | null
    birthdate: Date | null
    password: string | null
    isValidated: boolean | null
    otp: number | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    fullname: string | null
    birthdate: Date | null
    password: string | null
    isValidated: boolean | null
    otp: number | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    username: number
    fullname: number
    birthdate: number
    password: number
    isValidated: number
    otp: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    otp?: true
  }

  export type UsersSumAggregateInputType = {
    otp?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    fullname?: true
    birthdate?: true
    password?: true
    isValidated?: true
    otp?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    fullname?: true
    birthdate?: true
    password?: true
    isValidated?: true
    otp?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    fullname?: true
    birthdate?: true
    password?: true
    isValidated?: true
    otp?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    username: string
    fullname: string
    birthdate: Date
    password: string
    isValidated: boolean
    otp: number | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    fullname?: boolean
    birthdate?: boolean
    password?: boolean
    isValidated?: boolean
    otp?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedJobs?: boolean | Users$publishedJobsArgs<ExtArgs>
    hrNotifications?: boolean | Users$hrNotificationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    fullname?: boolean
    birthdate?: boolean
    password?: boolean
    isValidated?: boolean
    otp?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    fullname?: boolean
    birthdate?: boolean
    password?: boolean
    isValidated?: boolean
    otp?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    fullname?: boolean
    birthdate?: boolean
    password?: boolean
    isValidated?: boolean
    otp?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "fullname" | "birthdate" | "password" | "isValidated" | "otp" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publishedJobs?: boolean | Users$publishedJobsArgs<ExtArgs>
    hrNotifications?: boolean | Users$hrNotificationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      publishedJobs: Prisma.$JobsPayload<ExtArgs>[]
      hrNotifications: Prisma.$NotificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      fullname: string
      birthdate: Date
      password: string
      isValidated: boolean
      otp: number | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publishedJobs<T extends Users$publishedJobsArgs<ExtArgs> = {}>(args?: Subset<T, Users$publishedJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hrNotifications<T extends Users$hrNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$hrNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly fullname: FieldRef<"Users", 'String'>
    readonly birthdate: FieldRef<"Users", 'DateTime'>
    readonly password: FieldRef<"Users", 'String'>
    readonly isValidated: FieldRef<"Users", 'Boolean'>
    readonly otp: FieldRef<"Users", 'Int'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.publishedJobs
   */
  export type Users$publishedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    where?: JobsWhereInput
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    cursor?: JobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * Users.hrNotifications
   */
  export type Users$hrNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Applicants
   */

  export type AggregateApplicants = {
    _count: ApplicantsCountAggregateOutputType | null
    _avg: ApplicantsAvgAggregateOutputType | null
    _sum: ApplicantsSumAggregateOutputType | null
    _min: ApplicantsMinAggregateOutputType | null
    _max: ApplicantsMaxAggregateOutputType | null
  }

  export type ApplicantsAvgAggregateOutputType = {
    otp: number | null
  }

  export type ApplicantsSumAggregateOutputType = {
    otp: number | null
  }

  export type ApplicantsMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    fullname: string | null
    birthdate: Date | null
    about: string | null
    isValidated: boolean | null
    otp: number | null
    profileImgUrl: string | null
    gender: $Enums.Gender | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicantsMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    fullname: string | null
    birthdate: Date | null
    about: string | null
    isValidated: boolean | null
    otp: number | null
    profileImgUrl: string | null
    gender: $Enums.Gender | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApplicantsCountAggregateOutputType = {
    id: number
    email: number
    password: number
    fullname: number
    birthdate: number
    about: number
    isValidated: number
    otp: number
    profileImgUrl: number
    gender: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApplicantsAvgAggregateInputType = {
    otp?: true
  }

  export type ApplicantsSumAggregateInputType = {
    otp?: true
  }

  export type ApplicantsMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullname?: true
    birthdate?: true
    about?: true
    isValidated?: true
    otp?: true
    profileImgUrl?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicantsMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullname?: true
    birthdate?: true
    about?: true
    isValidated?: true
    otp?: true
    profileImgUrl?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApplicantsCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullname?: true
    birthdate?: true
    about?: true
    isValidated?: true
    otp?: true
    profileImgUrl?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApplicantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applicants to aggregate.
     */
    where?: ApplicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantsOrderByWithRelationInput | ApplicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applicants
    **/
    _count?: true | ApplicantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicantsMaxAggregateInputType
  }

  export type GetApplicantsAggregateType<T extends ApplicantsAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicants[P]>
      : GetScalarType<T[P], AggregateApplicants[P]>
  }




  export type ApplicantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicantsWhereInput
    orderBy?: ApplicantsOrderByWithAggregationInput | ApplicantsOrderByWithAggregationInput[]
    by: ApplicantsScalarFieldEnum[] | ApplicantsScalarFieldEnum
    having?: ApplicantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicantsCountAggregateInputType | true
    _avg?: ApplicantsAvgAggregateInputType
    _sum?: ApplicantsSumAggregateInputType
    _min?: ApplicantsMinAggregateInputType
    _max?: ApplicantsMaxAggregateInputType
  }

  export type ApplicantsGroupByOutputType = {
    id: string
    email: string
    password: string
    fullname: string
    birthdate: Date
    about: string | null
    isValidated: boolean
    otp: number | null
    profileImgUrl: string | null
    gender: $Enums.Gender
    createdAt: Date
    updatedAt: Date
    _count: ApplicantsCountAggregateOutputType | null
    _avg: ApplicantsAvgAggregateOutputType | null
    _sum: ApplicantsSumAggregateOutputType | null
    _min: ApplicantsMinAggregateOutputType | null
    _max: ApplicantsMaxAggregateOutputType | null
  }

  type GetApplicantsGroupByPayload<T extends ApplicantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicantsGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicantsGroupByOutputType[P]>
        }
      >
    >


  export type ApplicantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    fullname?: boolean
    birthdate?: boolean
    about?: boolean
    isValidated?: boolean
    otp?: boolean
    profileImgUrl?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resumes?: boolean | Applicants$resumesArgs<ExtArgs>
    interviewSchedules?: boolean | Applicants$interviewSchedulesArgs<ExtArgs>
    appliedJobs?: boolean | Applicants$appliedJobsArgs<ExtArgs>
    notifications?: boolean | Applicants$notificationsArgs<ExtArgs>
    _count?: boolean | ApplicantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicants"]>

  export type ApplicantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    fullname?: boolean
    birthdate?: boolean
    about?: boolean
    isValidated?: boolean
    otp?: boolean
    profileImgUrl?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["applicants"]>

  export type ApplicantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    fullname?: boolean
    birthdate?: boolean
    about?: boolean
    isValidated?: boolean
    otp?: boolean
    profileImgUrl?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["applicants"]>

  export type ApplicantsSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    fullname?: boolean
    birthdate?: boolean
    about?: boolean
    isValidated?: boolean
    otp?: boolean
    profileImgUrl?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApplicantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "fullname" | "birthdate" | "about" | "isValidated" | "otp" | "profileImgUrl" | "gender" | "createdAt" | "updatedAt", ExtArgs["result"]["applicants"]>
  export type ApplicantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resumes?: boolean | Applicants$resumesArgs<ExtArgs>
    interviewSchedules?: boolean | Applicants$interviewSchedulesArgs<ExtArgs>
    appliedJobs?: boolean | Applicants$appliedJobsArgs<ExtArgs>
    notifications?: boolean | Applicants$notificationsArgs<ExtArgs>
    _count?: boolean | ApplicantsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApplicantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ApplicantsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ApplicantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Applicants"
    objects: {
      resumes: Prisma.$ResumesPayload<ExtArgs>[]
      interviewSchedules: Prisma.$InterviewSchedulesPayload<ExtArgs>[]
      appliedJobs: Prisma.$ApplicantJobsPayload<ExtArgs>[]
      notifications: Prisma.$NotificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      fullname: string
      birthdate: Date
      about: string | null
      isValidated: boolean
      otp: number | null
      profileImgUrl: string | null
      gender: $Enums.Gender
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["applicants"]>
    composites: {}
  }

  type ApplicantsGetPayload<S extends boolean | null | undefined | ApplicantsDefaultArgs> = $Result.GetResult<Prisma.$ApplicantsPayload, S>

  type ApplicantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicantsCountAggregateInputType | true
    }

  export interface ApplicantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Applicants'], meta: { name: 'Applicants' } }
    /**
     * Find zero or one Applicants that matches the filter.
     * @param {ApplicantsFindUniqueArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicantsFindUniqueArgs>(args: SelectSubset<T, ApplicantsFindUniqueArgs<ExtArgs>>): Prisma__ApplicantsClient<$Result.GetResult<Prisma.$ApplicantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Applicants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicantsFindUniqueOrThrowArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicantsFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicantsClient<$Result.GetResult<Prisma.$ApplicantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantsFindFirstArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicantsFindFirstArgs>(args?: SelectSubset<T, ApplicantsFindFirstArgs<ExtArgs>>): Prisma__ApplicantsClient<$Result.GetResult<Prisma.$ApplicantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantsFindFirstOrThrowArgs} args - Arguments to find a Applicants
     * @example
     * // Get one Applicants
     * const applicants = await prisma.applicants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicantsFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicantsClient<$Result.GetResult<Prisma.$ApplicantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applicants
     * const applicants = await prisma.applicants.findMany()
     * 
     * // Get first 10 Applicants
     * const applicants = await prisma.applicants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicantsWithIdOnly = await prisma.applicants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicantsFindManyArgs>(args?: SelectSubset<T, ApplicantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Applicants.
     * @param {ApplicantsCreateArgs} args - Arguments to create a Applicants.
     * @example
     * // Create one Applicants
     * const Applicants = await prisma.applicants.create({
     *   data: {
     *     // ... data to create a Applicants
     *   }
     * })
     * 
     */
    create<T extends ApplicantsCreateArgs>(args: SelectSubset<T, ApplicantsCreateArgs<ExtArgs>>): Prisma__ApplicantsClient<$Result.GetResult<Prisma.$ApplicantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applicants.
     * @param {ApplicantsCreateManyArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicants = await prisma.applicants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicantsCreateManyArgs>(args?: SelectSubset<T, ApplicantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applicants and returns the data saved in the database.
     * @param {ApplicantsCreateManyAndReturnArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicants = await prisma.applicants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applicants and only return the `id`
     * const applicantsWithIdOnly = await prisma.applicants.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicantsCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Applicants.
     * @param {ApplicantsDeleteArgs} args - Arguments to delete one Applicants.
     * @example
     * // Delete one Applicants
     * const Applicants = await prisma.applicants.delete({
     *   where: {
     *     // ... filter to delete one Applicants
     *   }
     * })
     * 
     */
    delete<T extends ApplicantsDeleteArgs>(args: SelectSubset<T, ApplicantsDeleteArgs<ExtArgs>>): Prisma__ApplicantsClient<$Result.GetResult<Prisma.$ApplicantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Applicants.
     * @param {ApplicantsUpdateArgs} args - Arguments to update one Applicants.
     * @example
     * // Update one Applicants
     * const applicants = await prisma.applicants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicantsUpdateArgs>(args: SelectSubset<T, ApplicantsUpdateArgs<ExtArgs>>): Prisma__ApplicantsClient<$Result.GetResult<Prisma.$ApplicantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applicants.
     * @param {ApplicantsDeleteManyArgs} args - Arguments to filter Applicants to delete.
     * @example
     * // Delete a few Applicants
     * const { count } = await prisma.applicants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicantsDeleteManyArgs>(args?: SelectSubset<T, ApplicantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applicants
     * const applicants = await prisma.applicants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicantsUpdateManyArgs>(args: SelectSubset<T, ApplicantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applicants and returns the data updated in the database.
     * @param {ApplicantsUpdateManyAndReturnArgs} args - Arguments to update many Applicants.
     * @example
     * // Update many Applicants
     * const applicants = await prisma.applicants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applicants and only return the `id`
     * const applicantsWithIdOnly = await prisma.applicants.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicantsUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Applicants.
     * @param {ApplicantsUpsertArgs} args - Arguments to update or create a Applicants.
     * @example
     * // Update or create a Applicants
     * const applicants = await prisma.applicants.upsert({
     *   create: {
     *     // ... data to create a Applicants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applicants we want to update
     *   }
     * })
     */
    upsert<T extends ApplicantsUpsertArgs>(args: SelectSubset<T, ApplicantsUpsertArgs<ExtArgs>>): Prisma__ApplicantsClient<$Result.GetResult<Prisma.$ApplicantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantsCountArgs} args - Arguments to filter Applicants to count.
     * @example
     * // Count the number of Applicants
     * const count = await prisma.applicants.count({
     *   where: {
     *     // ... the filter for the Applicants we want to count
     *   }
     * })
    **/
    count<T extends ApplicantsCountArgs>(
      args?: Subset<T, ApplicantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicantsAggregateArgs>(args: Subset<T, ApplicantsAggregateArgs>): Prisma.PrismaPromise<GetApplicantsAggregateType<T>>

    /**
     * Group by Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicantsGroupByArgs['orderBy'] }
        : { orderBy?: ApplicantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Applicants model
   */
  readonly fields: ApplicantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Applicants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resumes<T extends Applicants$resumesArgs<ExtArgs> = {}>(args?: Subset<T, Applicants$resumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interviewSchedules<T extends Applicants$interviewSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Applicants$interviewSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewSchedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appliedJobs<T extends Applicants$appliedJobsArgs<ExtArgs> = {}>(args?: Subset<T, Applicants$appliedJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantJobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Applicants$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Applicants$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Applicants model
   */
  interface ApplicantsFieldRefs {
    readonly id: FieldRef<"Applicants", 'String'>
    readonly email: FieldRef<"Applicants", 'String'>
    readonly password: FieldRef<"Applicants", 'String'>
    readonly fullname: FieldRef<"Applicants", 'String'>
    readonly birthdate: FieldRef<"Applicants", 'DateTime'>
    readonly about: FieldRef<"Applicants", 'String'>
    readonly isValidated: FieldRef<"Applicants", 'Boolean'>
    readonly otp: FieldRef<"Applicants", 'Int'>
    readonly profileImgUrl: FieldRef<"Applicants", 'String'>
    readonly gender: FieldRef<"Applicants", 'Gender'>
    readonly createdAt: FieldRef<"Applicants", 'DateTime'>
    readonly updatedAt: FieldRef<"Applicants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Applicants findUnique
   */
  export type ApplicantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicants
     */
    select?: ApplicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicants
     */
    omit?: ApplicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantsInclude<ExtArgs> | null
    /**
     * Filter, which Applicants to fetch.
     */
    where: ApplicantsWhereUniqueInput
  }

  /**
   * Applicants findUniqueOrThrow
   */
  export type ApplicantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicants
     */
    select?: ApplicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicants
     */
    omit?: ApplicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantsInclude<ExtArgs> | null
    /**
     * Filter, which Applicants to fetch.
     */
    where: ApplicantsWhereUniqueInput
  }

  /**
   * Applicants findFirst
   */
  export type ApplicantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicants
     */
    select?: ApplicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicants
     */
    omit?: ApplicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantsInclude<ExtArgs> | null
    /**
     * Filter, which Applicants to fetch.
     */
    where?: ApplicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantsOrderByWithRelationInput | ApplicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applicants.
     */
    cursor?: ApplicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applicants.
     */
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * Applicants findFirstOrThrow
   */
  export type ApplicantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicants
     */
    select?: ApplicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicants
     */
    omit?: ApplicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantsInclude<ExtArgs> | null
    /**
     * Filter, which Applicants to fetch.
     */
    where?: ApplicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantsOrderByWithRelationInput | ApplicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applicants.
     */
    cursor?: ApplicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applicants.
     */
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * Applicants findMany
   */
  export type ApplicantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicants
     */
    select?: ApplicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicants
     */
    omit?: ApplicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantsInclude<ExtArgs> | null
    /**
     * Filter, which Applicants to fetch.
     */
    where?: ApplicantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantsOrderByWithRelationInput | ApplicantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applicants.
     */
    cursor?: ApplicantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    distinct?: ApplicantsScalarFieldEnum | ApplicantsScalarFieldEnum[]
  }

  /**
   * Applicants create
   */
  export type ApplicantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicants
     */
    select?: ApplicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicants
     */
    omit?: ApplicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantsInclude<ExtArgs> | null
    /**
     * The data needed to create a Applicants.
     */
    data: XOR<ApplicantsCreateInput, ApplicantsUncheckedCreateInput>
  }

  /**
   * Applicants createMany
   */
  export type ApplicantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applicants.
     */
    data: ApplicantsCreateManyInput | ApplicantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Applicants createManyAndReturn
   */
  export type ApplicantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicants
     */
    select?: ApplicantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Applicants
     */
    omit?: ApplicantsOmit<ExtArgs> | null
    /**
     * The data used to create many Applicants.
     */
    data: ApplicantsCreateManyInput | ApplicantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Applicants update
   */
  export type ApplicantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicants
     */
    select?: ApplicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicants
     */
    omit?: ApplicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantsInclude<ExtArgs> | null
    /**
     * The data needed to update a Applicants.
     */
    data: XOR<ApplicantsUpdateInput, ApplicantsUncheckedUpdateInput>
    /**
     * Choose, which Applicants to update.
     */
    where: ApplicantsWhereUniqueInput
  }

  /**
   * Applicants updateMany
   */
  export type ApplicantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applicants.
     */
    data: XOR<ApplicantsUpdateManyMutationInput, ApplicantsUncheckedUpdateManyInput>
    /**
     * Filter which Applicants to update
     */
    where?: ApplicantsWhereInput
    /**
     * Limit how many Applicants to update.
     */
    limit?: number
  }

  /**
   * Applicants updateManyAndReturn
   */
  export type ApplicantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicants
     */
    select?: ApplicantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Applicants
     */
    omit?: ApplicantsOmit<ExtArgs> | null
    /**
     * The data used to update Applicants.
     */
    data: XOR<ApplicantsUpdateManyMutationInput, ApplicantsUncheckedUpdateManyInput>
    /**
     * Filter which Applicants to update
     */
    where?: ApplicantsWhereInput
    /**
     * Limit how many Applicants to update.
     */
    limit?: number
  }

  /**
   * Applicants upsert
   */
  export type ApplicantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicants
     */
    select?: ApplicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicants
     */
    omit?: ApplicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantsInclude<ExtArgs> | null
    /**
     * The filter to search for the Applicants to update in case it exists.
     */
    where: ApplicantsWhereUniqueInput
    /**
     * In case the Applicants found by the `where` argument doesn't exist, create a new Applicants with this data.
     */
    create: XOR<ApplicantsCreateInput, ApplicantsUncheckedCreateInput>
    /**
     * In case the Applicants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicantsUpdateInput, ApplicantsUncheckedUpdateInput>
  }

  /**
   * Applicants delete
   */
  export type ApplicantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicants
     */
    select?: ApplicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicants
     */
    omit?: ApplicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantsInclude<ExtArgs> | null
    /**
     * Filter which Applicants to delete.
     */
    where: ApplicantsWhereUniqueInput
  }

  /**
   * Applicants deleteMany
   */
  export type ApplicantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applicants to delete
     */
    where?: ApplicantsWhereInput
    /**
     * Limit how many Applicants to delete.
     */
    limit?: number
  }

  /**
   * Applicants.resumes
   */
  export type Applicants$resumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumes
     */
    select?: ResumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resumes
     */
    omit?: ResumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumesInclude<ExtArgs> | null
    where?: ResumesWhereInput
    orderBy?: ResumesOrderByWithRelationInput | ResumesOrderByWithRelationInput[]
    cursor?: ResumesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumesScalarFieldEnum | ResumesScalarFieldEnum[]
  }

  /**
   * Applicants.interviewSchedules
   */
  export type Applicants$interviewSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSchedules
     */
    select?: InterviewSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSchedules
     */
    omit?: InterviewSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSchedulesInclude<ExtArgs> | null
    where?: InterviewSchedulesWhereInput
    orderBy?: InterviewSchedulesOrderByWithRelationInput | InterviewSchedulesOrderByWithRelationInput[]
    cursor?: InterviewSchedulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewSchedulesScalarFieldEnum | InterviewSchedulesScalarFieldEnum[]
  }

  /**
   * Applicants.appliedJobs
   */
  export type Applicants$appliedJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantJobs
     */
    select?: ApplicantJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicantJobs
     */
    omit?: ApplicantJobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantJobsInclude<ExtArgs> | null
    where?: ApplicantJobsWhereInput
    orderBy?: ApplicantJobsOrderByWithRelationInput | ApplicantJobsOrderByWithRelationInput[]
    cursor?: ApplicantJobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicantJobsScalarFieldEnum | ApplicantJobsScalarFieldEnum[]
  }

  /**
   * Applicants.notifications
   */
  export type Applicants$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Applicants without action
   */
  export type ApplicantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicants
     */
    select?: ApplicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicants
     */
    omit?: ApplicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantsInclude<ExtArgs> | null
  }


  /**
   * Model Jobs
   */

  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsMinAggregateOutputType = {
    id: string | null
    position: string | null
    jobLocType: $Enums.JobLocationType | null
    empType: $Enums.EmploymentType | null
    publisherId: string | null
    qualification: string | null
    description: string | null
    deadline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobsMaxAggregateOutputType = {
    id: string | null
    position: string | null
    jobLocType: $Enums.JobLocationType | null
    empType: $Enums.EmploymentType | null
    publisherId: string | null
    qualification: string | null
    description: string | null
    deadline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobsCountAggregateOutputType = {
    id: number
    position: number
    jobLocType: number
    empType: number
    publisherId: number
    qualification: number
    description: number
    deadline: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobsMinAggregateInputType = {
    id?: true
    position?: true
    jobLocType?: true
    empType?: true
    publisherId?: true
    qualification?: true
    description?: true
    deadline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobsMaxAggregateInputType = {
    id?: true
    position?: true
    jobLocType?: true
    empType?: true
    publisherId?: true
    qualification?: true
    description?: true
    deadline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobsCountAggregateInputType = {
    id?: true
    position?: true
    jobLocType?: true
    empType?: true
    publisherId?: true
    qualification?: true
    description?: true
    deadline?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to aggregate.
     */
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type JobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobsWhereInput
    orderBy?: JobsOrderByWithAggregationInput | JobsOrderByWithAggregationInput[]
    by: JobsScalarFieldEnum[] | JobsScalarFieldEnum
    having?: JobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }

  export type JobsGroupByOutputType = {
    id: string
    position: string
    jobLocType: $Enums.JobLocationType
    empType: $Enums.EmploymentType
    publisherId: string
    qualification: string
    description: string
    deadline: Date
    createdAt: Date
    updatedAt: Date
    _count: JobsCountAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends JobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type JobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    jobLocType?: boolean
    empType?: boolean
    publisherId?: boolean
    qualification?: boolean
    description?: boolean
    deadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publisher?: boolean | UsersDefaultArgs<ExtArgs>
    Resumes?: boolean | Jobs$ResumesArgs<ExtArgs>
    interviewSchedules?: boolean | Jobs$interviewSchedulesArgs<ExtArgs>
    applicantJobs?: boolean | Jobs$applicantJobsArgs<ExtArgs>
    _count?: boolean | JobsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobs"]>

  export type JobsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    jobLocType?: boolean
    empType?: boolean
    publisherId?: boolean
    qualification?: boolean
    description?: boolean
    deadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publisher?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobs"]>

  export type JobsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    position?: boolean
    jobLocType?: boolean
    empType?: boolean
    publisherId?: boolean
    qualification?: boolean
    description?: boolean
    deadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publisher?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobs"]>

  export type JobsSelectScalar = {
    id?: boolean
    position?: boolean
    jobLocType?: boolean
    empType?: boolean
    publisherId?: boolean
    qualification?: boolean
    description?: boolean
    deadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "position" | "jobLocType" | "empType" | "publisherId" | "qualification" | "description" | "deadline" | "createdAt" | "updatedAt", ExtArgs["result"]["jobs"]>
  export type JobsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UsersDefaultArgs<ExtArgs>
    Resumes?: boolean | Jobs$ResumesArgs<ExtArgs>
    interviewSchedules?: boolean | Jobs$interviewSchedulesArgs<ExtArgs>
    applicantJobs?: boolean | Jobs$applicantJobsArgs<ExtArgs>
    _count?: boolean | JobsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type JobsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $JobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jobs"
    objects: {
      publisher: Prisma.$UsersPayload<ExtArgs>
      Resumes: Prisma.$ResumesPayload<ExtArgs>[]
      interviewSchedules: Prisma.$InterviewSchedulesPayload<ExtArgs>[]
      applicantJobs: Prisma.$ApplicantJobsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      position: string
      jobLocType: $Enums.JobLocationType
      empType: $Enums.EmploymentType
      publisherId: string
      qualification: string
      description: string
      deadline: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobs"]>
    composites: {}
  }

  type JobsGetPayload<S extends boolean | null | undefined | JobsDefaultArgs> = $Result.GetResult<Prisma.$JobsPayload, S>

  type JobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobsCountAggregateInputType | true
    }

  export interface JobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jobs'], meta: { name: 'Jobs' } }
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {JobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobsFindUniqueArgs>(args: SelectSubset<T, JobsFindUniqueArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobsFindUniqueOrThrowArgs>(args: SelectSubset<T, JobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobsFindFirstArgs>(args?: SelectSubset<T, JobsFindFirstArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobsFindFirstOrThrowArgs>(args?: SelectSubset<T, JobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobsWithIdOnly = await prisma.jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobsFindManyArgs>(args?: SelectSubset<T, JobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jobs.
     * @param {JobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
     */
    create<T extends JobsCreateArgs>(args: SelectSubset<T, JobsCreateArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobsCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobsCreateManyArgs>(args?: SelectSubset<T, JobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobsCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `id`
     * const jobsWithIdOnly = await prisma.jobs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobsCreateManyAndReturnArgs>(args?: SelectSubset<T, JobsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jobs.
     * @param {JobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
     */
    delete<T extends JobsDeleteArgs>(args: SelectSubset<T, JobsDeleteArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jobs.
     * @param {JobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobsUpdateArgs>(args: SelectSubset<T, JobsUpdateArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobsDeleteManyArgs>(args?: SelectSubset<T, JobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobsUpdateManyArgs>(args: SelectSubset<T, JobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobsUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `id`
     * const jobsWithIdOnly = await prisma.jobs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobsUpdateManyAndReturnArgs>(args: SelectSubset<T, JobsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jobs.
     * @param {JobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
     */
    upsert<T extends JobsUpsertArgs>(args: SelectSubset<T, JobsUpsertArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobsCountArgs>(
      args?: Subset<T, JobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): Prisma.PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobsGroupByArgs['orderBy'] }
        : { orderBy?: JobsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jobs model
   */
  readonly fields: JobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publisher<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Resumes<T extends Jobs$ResumesArgs<ExtArgs> = {}>(args?: Subset<T, Jobs$ResumesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interviewSchedules<T extends Jobs$interviewSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Jobs$interviewSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewSchedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applicantJobs<T extends Jobs$applicantJobsArgs<ExtArgs> = {}>(args?: Subset<T, Jobs$applicantJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantJobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Jobs model
   */
  interface JobsFieldRefs {
    readonly id: FieldRef<"Jobs", 'String'>
    readonly position: FieldRef<"Jobs", 'String'>
    readonly jobLocType: FieldRef<"Jobs", 'JobLocationType'>
    readonly empType: FieldRef<"Jobs", 'EmploymentType'>
    readonly publisherId: FieldRef<"Jobs", 'String'>
    readonly qualification: FieldRef<"Jobs", 'String'>
    readonly description: FieldRef<"Jobs", 'String'>
    readonly deadline: FieldRef<"Jobs", 'DateTime'>
    readonly createdAt: FieldRef<"Jobs", 'DateTime'>
    readonly updatedAt: FieldRef<"Jobs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Jobs findUnique
   */
  export type JobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where: JobsWhereUniqueInput
  }

  /**
   * Jobs findUniqueOrThrow
   */
  export type JobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where: JobsWhereUniqueInput
  }

  /**
   * Jobs findFirst
   */
  export type JobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * Jobs findFirstOrThrow
   */
  export type JobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * Jobs findMany
   */
  export type JobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * Jobs create
   */
  export type JobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * The data needed to create a Jobs.
     */
    data: XOR<JobsCreateInput, JobsUncheckedCreateInput>
  }

  /**
   * Jobs createMany
   */
  export type JobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobsCreateManyInput | JobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jobs createManyAndReturn
   */
  export type JobsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobsCreateManyInput | JobsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jobs update
   */
  export type JobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * The data needed to update a Jobs.
     */
    data: XOR<JobsUpdateInput, JobsUncheckedUpdateInput>
    /**
     * Choose, which Jobs to update.
     */
    where: JobsWhereUniqueInput
  }

  /**
   * Jobs updateMany
   */
  export type JobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobsUpdateManyMutationInput, JobsUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobsWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Jobs updateManyAndReturn
   */
  export type JobsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobsUpdateManyMutationInput, JobsUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobsWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jobs upsert
   */
  export type JobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * The filter to search for the Jobs to update in case it exists.
     */
    where: JobsWhereUniqueInput
    /**
     * In case the Jobs found by the `where` argument doesn't exist, create a new Jobs with this data.
     */
    create: XOR<JobsCreateInput, JobsUncheckedCreateInput>
    /**
     * In case the Jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobsUpdateInput, JobsUncheckedUpdateInput>
  }

  /**
   * Jobs delete
   */
  export type JobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter which Jobs to delete.
     */
    where: JobsWhereUniqueInput
  }

  /**
   * Jobs deleteMany
   */
  export type JobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobsWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Jobs.Resumes
   */
  export type Jobs$ResumesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumes
     */
    select?: ResumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resumes
     */
    omit?: ResumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumesInclude<ExtArgs> | null
    where?: ResumesWhereInput
    orderBy?: ResumesOrderByWithRelationInput | ResumesOrderByWithRelationInput[]
    cursor?: ResumesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumesScalarFieldEnum | ResumesScalarFieldEnum[]
  }

  /**
   * Jobs.interviewSchedules
   */
  export type Jobs$interviewSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSchedules
     */
    select?: InterviewSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSchedules
     */
    omit?: InterviewSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSchedulesInclude<ExtArgs> | null
    where?: InterviewSchedulesWhereInput
    orderBy?: InterviewSchedulesOrderByWithRelationInput | InterviewSchedulesOrderByWithRelationInput[]
    cursor?: InterviewSchedulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterviewSchedulesScalarFieldEnum | InterviewSchedulesScalarFieldEnum[]
  }

  /**
   * Jobs.applicantJobs
   */
  export type Jobs$applicantJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantJobs
     */
    select?: ApplicantJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicantJobs
     */
    omit?: ApplicantJobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantJobsInclude<ExtArgs> | null
    where?: ApplicantJobsWhereInput
    orderBy?: ApplicantJobsOrderByWithRelationInput | ApplicantJobsOrderByWithRelationInput[]
    cursor?: ApplicantJobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicantJobsScalarFieldEnum | ApplicantJobsScalarFieldEnum[]
  }

  /**
   * Jobs without action
   */
  export type JobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
  }


  /**
   * Model Resumes
   */

  export type AggregateResumes = {
    _count: ResumesCountAggregateOutputType | null
    _min: ResumesMinAggregateOutputType | null
    _max: ResumesMaxAggregateOutputType | null
  }

  export type ResumesMinAggregateOutputType = {
    id: string | null
    applicantId: string | null
    jobId: string | null
    resumeName: string | null
    resumeUrl: string | null
    submittedAt: Date | null
    updatedAt: Date | null
  }

  export type ResumesMaxAggregateOutputType = {
    id: string | null
    applicantId: string | null
    jobId: string | null
    resumeName: string | null
    resumeUrl: string | null
    submittedAt: Date | null
    updatedAt: Date | null
  }

  export type ResumesCountAggregateOutputType = {
    id: number
    applicantId: number
    jobId: number
    resumeName: number
    resumeUrl: number
    submittedAt: number
    updatedAt: number
    _all: number
  }


  export type ResumesMinAggregateInputType = {
    id?: true
    applicantId?: true
    jobId?: true
    resumeName?: true
    resumeUrl?: true
    submittedAt?: true
    updatedAt?: true
  }

  export type ResumesMaxAggregateInputType = {
    id?: true
    applicantId?: true
    jobId?: true
    resumeName?: true
    resumeUrl?: true
    submittedAt?: true
    updatedAt?: true
  }

  export type ResumesCountAggregateInputType = {
    id?: true
    applicantId?: true
    jobId?: true
    resumeName?: true
    resumeUrl?: true
    submittedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to aggregate.
     */
    where?: ResumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumesOrderByWithRelationInput | ResumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumesMaxAggregateInputType
  }

  export type GetResumesAggregateType<T extends ResumesAggregateArgs> = {
        [P in keyof T & keyof AggregateResumes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResumes[P]>
      : GetScalarType<T[P], AggregateResumes[P]>
  }




  export type ResumesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumesWhereInput
    orderBy?: ResumesOrderByWithAggregationInput | ResumesOrderByWithAggregationInput[]
    by: ResumesScalarFieldEnum[] | ResumesScalarFieldEnum
    having?: ResumesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumesCountAggregateInputType | true
    _min?: ResumesMinAggregateInputType
    _max?: ResumesMaxAggregateInputType
  }

  export type ResumesGroupByOutputType = {
    id: string
    applicantId: string
    jobId: string
    resumeName: string
    resumeUrl: string
    submittedAt: Date
    updatedAt: Date
    _count: ResumesCountAggregateOutputType | null
    _min: ResumesMinAggregateOutputType | null
    _max: ResumesMaxAggregateOutputType | null
  }

  type GetResumesGroupByPayload<T extends ResumesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumesGroupByOutputType[P]>
            : GetScalarType<T[P], ResumesGroupByOutputType[P]>
        }
      >
    >


  export type ResumesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    jobId?: boolean
    resumeName?: boolean
    resumeUrl?: boolean
    submittedAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumes"]>

  export type ResumesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    jobId?: boolean
    resumeName?: boolean
    resumeUrl?: boolean
    submittedAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumes"]>

  export type ResumesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    jobId?: boolean
    resumeName?: boolean
    resumeUrl?: boolean
    submittedAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resumes"]>

  export type ResumesSelectScalar = {
    id?: boolean
    applicantId?: boolean
    jobId?: boolean
    resumeName?: boolean
    resumeUrl?: boolean
    submittedAt?: boolean
    updatedAt?: boolean
  }

  export type ResumesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicantId" | "jobId" | "resumeName" | "resumeUrl" | "submittedAt" | "updatedAt", ExtArgs["result"]["resumes"]>
  export type ResumesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }
  export type ResumesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }
  export type ResumesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }

  export type $ResumesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resumes"
    objects: {
      applicant: Prisma.$ApplicantsPayload<ExtArgs>
      job: Prisma.$JobsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicantId: string
      jobId: string
      resumeName: string
      resumeUrl: string
      submittedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resumes"]>
    composites: {}
  }

  type ResumesGetPayload<S extends boolean | null | undefined | ResumesDefaultArgs> = $Result.GetResult<Prisma.$ResumesPayload, S>

  type ResumesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumesCountAggregateInputType | true
    }

  export interface ResumesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resumes'], meta: { name: 'Resumes' } }
    /**
     * Find zero or one Resumes that matches the filter.
     * @param {ResumesFindUniqueArgs} args - Arguments to find a Resumes
     * @example
     * // Get one Resumes
     * const resumes = await prisma.resumes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumesFindUniqueArgs>(args: SelectSubset<T, ResumesFindUniqueArgs<ExtArgs>>): Prisma__ResumesClient<$Result.GetResult<Prisma.$ResumesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resumes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumesFindUniqueOrThrowArgs} args - Arguments to find a Resumes
     * @example
     * // Get one Resumes
     * const resumes = await prisma.resumes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumesFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumesClient<$Result.GetResult<Prisma.$ResumesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumesFindFirstArgs} args - Arguments to find a Resumes
     * @example
     * // Get one Resumes
     * const resumes = await prisma.resumes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumesFindFirstArgs>(args?: SelectSubset<T, ResumesFindFirstArgs<ExtArgs>>): Prisma__ResumesClient<$Result.GetResult<Prisma.$ResumesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resumes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumesFindFirstOrThrowArgs} args - Arguments to find a Resumes
     * @example
     * // Get one Resumes
     * const resumes = await prisma.resumes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumesFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumesClient<$Result.GetResult<Prisma.$ResumesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resumes.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resumes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumesWithIdOnly = await prisma.resumes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumesFindManyArgs>(args?: SelectSubset<T, ResumesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resumes.
     * @param {ResumesCreateArgs} args - Arguments to create a Resumes.
     * @example
     * // Create one Resumes
     * const Resumes = await prisma.resumes.create({
     *   data: {
     *     // ... data to create a Resumes
     *   }
     * })
     * 
     */
    create<T extends ResumesCreateArgs>(args: SelectSubset<T, ResumesCreateArgs<ExtArgs>>): Prisma__ResumesClient<$Result.GetResult<Prisma.$ResumesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumesCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resumes = await prisma.resumes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumesCreateManyArgs>(args?: SelectSubset<T, ResumesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumesCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resumes = await prisma.resumes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumesWithIdOnly = await prisma.resumes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumesCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resumes.
     * @param {ResumesDeleteArgs} args - Arguments to delete one Resumes.
     * @example
     * // Delete one Resumes
     * const Resumes = await prisma.resumes.delete({
     *   where: {
     *     // ... filter to delete one Resumes
     *   }
     * })
     * 
     */
    delete<T extends ResumesDeleteArgs>(args: SelectSubset<T, ResumesDeleteArgs<ExtArgs>>): Prisma__ResumesClient<$Result.GetResult<Prisma.$ResumesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resumes.
     * @param {ResumesUpdateArgs} args - Arguments to update one Resumes.
     * @example
     * // Update one Resumes
     * const resumes = await prisma.resumes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumesUpdateArgs>(args: SelectSubset<T, ResumesUpdateArgs<ExtArgs>>): Prisma__ResumesClient<$Result.GetResult<Prisma.$ResumesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumesDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resumes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumesDeleteManyArgs>(args?: SelectSubset<T, ResumesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resumes = await prisma.resumes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumesUpdateManyArgs>(args: SelectSubset<T, ResumesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {ResumesUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resumes = await prisma.resumes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resumes and only return the `id`
     * const resumesWithIdOnly = await prisma.resumes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResumesUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resumes.
     * @param {ResumesUpsertArgs} args - Arguments to update or create a Resumes.
     * @example
     * // Update or create a Resumes
     * const resumes = await prisma.resumes.upsert({
     *   create: {
     *     // ... data to create a Resumes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resumes we want to update
     *   }
     * })
     */
    upsert<T extends ResumesUpsertArgs>(args: SelectSubset<T, ResumesUpsertArgs<ExtArgs>>): Prisma__ResumesClient<$Result.GetResult<Prisma.$ResumesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumesCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resumes.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumesCountArgs>(
      args?: Subset<T, ResumesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumesAggregateArgs>(args: Subset<T, ResumesAggregateArgs>): Prisma.PrismaPromise<GetResumesAggregateType<T>>

    /**
     * Group by Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumesGroupByArgs['orderBy'] }
        : { orderBy?: ResumesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resumes model
   */
  readonly fields: ResumesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resumes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends ApplicantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicantsDefaultArgs<ExtArgs>>): Prisma__ApplicantsClient<$Result.GetResult<Prisma.$ApplicantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    job<T extends JobsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobsDefaultArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resumes model
   */
  interface ResumesFieldRefs {
    readonly id: FieldRef<"Resumes", 'String'>
    readonly applicantId: FieldRef<"Resumes", 'String'>
    readonly jobId: FieldRef<"Resumes", 'String'>
    readonly resumeName: FieldRef<"Resumes", 'String'>
    readonly resumeUrl: FieldRef<"Resumes", 'String'>
    readonly submittedAt: FieldRef<"Resumes", 'DateTime'>
    readonly updatedAt: FieldRef<"Resumes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resumes findUnique
   */
  export type ResumesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumes
     */
    select?: ResumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resumes
     */
    omit?: ResumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumesInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where: ResumesWhereUniqueInput
  }

  /**
   * Resumes findUniqueOrThrow
   */
  export type ResumesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumes
     */
    select?: ResumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resumes
     */
    omit?: ResumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumesInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where: ResumesWhereUniqueInput
  }

  /**
   * Resumes findFirst
   */
  export type ResumesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumes
     */
    select?: ResumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resumes
     */
    omit?: ResumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumesInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumesOrderByWithRelationInput | ResumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumesScalarFieldEnum | ResumesScalarFieldEnum[]
  }

  /**
   * Resumes findFirstOrThrow
   */
  export type ResumesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumes
     */
    select?: ResumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resumes
     */
    omit?: ResumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumesInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumesOrderByWithRelationInput | ResumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumesScalarFieldEnum | ResumesScalarFieldEnum[]
  }

  /**
   * Resumes findMany
   */
  export type ResumesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumes
     */
    select?: ResumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resumes
     */
    omit?: ResumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumesInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumesOrderByWithRelationInput | ResumesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumesScalarFieldEnum | ResumesScalarFieldEnum[]
  }

  /**
   * Resumes create
   */
  export type ResumesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumes
     */
    select?: ResumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resumes
     */
    omit?: ResumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumesInclude<ExtArgs> | null
    /**
     * The data needed to create a Resumes.
     */
    data: XOR<ResumesCreateInput, ResumesUncheckedCreateInput>
  }

  /**
   * Resumes createMany
   */
  export type ResumesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumesCreateManyInput | ResumesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resumes createManyAndReturn
   */
  export type ResumesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumes
     */
    select?: ResumesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resumes
     */
    omit?: ResumesOmit<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumesCreateManyInput | ResumesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resumes update
   */
  export type ResumesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumes
     */
    select?: ResumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resumes
     */
    omit?: ResumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumesInclude<ExtArgs> | null
    /**
     * The data needed to update a Resumes.
     */
    data: XOR<ResumesUpdateInput, ResumesUncheckedUpdateInput>
    /**
     * Choose, which Resumes to update.
     */
    where: ResumesWhereUniqueInput
  }

  /**
   * Resumes updateMany
   */
  export type ResumesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumesUpdateManyMutationInput, ResumesUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumesWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resumes updateManyAndReturn
   */
  export type ResumesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumes
     */
    select?: ResumesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resumes
     */
    omit?: ResumesOmit<ExtArgs> | null
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumesUpdateManyMutationInput, ResumesUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumesWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resumes upsert
   */
  export type ResumesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumes
     */
    select?: ResumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resumes
     */
    omit?: ResumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumesInclude<ExtArgs> | null
    /**
     * The filter to search for the Resumes to update in case it exists.
     */
    where: ResumesWhereUniqueInput
    /**
     * In case the Resumes found by the `where` argument doesn't exist, create a new Resumes with this data.
     */
    create: XOR<ResumesCreateInput, ResumesUncheckedCreateInput>
    /**
     * In case the Resumes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumesUpdateInput, ResumesUncheckedUpdateInput>
  }

  /**
   * Resumes delete
   */
  export type ResumesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumes
     */
    select?: ResumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resumes
     */
    omit?: ResumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumesInclude<ExtArgs> | null
    /**
     * Filter which Resumes to delete.
     */
    where: ResumesWhereUniqueInput
  }

  /**
   * Resumes deleteMany
   */
  export type ResumesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumesWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resumes without action
   */
  export type ResumesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumes
     */
    select?: ResumesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resumes
     */
    omit?: ResumesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumesInclude<ExtArgs> | null
  }


  /**
   * Model InterviewSchedules
   */

  export type AggregateInterviewSchedules = {
    _count: InterviewSchedulesCountAggregateOutputType | null
    _min: InterviewSchedulesMinAggregateOutputType | null
    _max: InterviewSchedulesMaxAggregateOutputType | null
  }

  export type InterviewSchedulesMinAggregateOutputType = {
    id: string | null
    applicantId: string | null
    jobId: string | null
    scheduleDate: Date | null
    scheduleTime: Date | null
    location: string | null
    status: $Enums.ScheduleStatus | null
    mode: $Enums.InterviewMode | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewSchedulesMaxAggregateOutputType = {
    id: string | null
    applicantId: string | null
    jobId: string | null
    scheduleDate: Date | null
    scheduleTime: Date | null
    location: string | null
    status: $Enums.ScheduleStatus | null
    mode: $Enums.InterviewMode | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterviewSchedulesCountAggregateOutputType = {
    id: number
    applicantId: number
    jobId: number
    scheduleDate: number
    scheduleTime: number
    location: number
    status: number
    mode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InterviewSchedulesMinAggregateInputType = {
    id?: true
    applicantId?: true
    jobId?: true
    scheduleDate?: true
    scheduleTime?: true
    location?: true
    status?: true
    mode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewSchedulesMaxAggregateInputType = {
    id?: true
    applicantId?: true
    jobId?: true
    scheduleDate?: true
    scheduleTime?: true
    location?: true
    status?: true
    mode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterviewSchedulesCountAggregateInputType = {
    id?: true
    applicantId?: true
    jobId?: true
    scheduleDate?: true
    scheduleTime?: true
    location?: true
    status?: true
    mode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InterviewSchedulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewSchedules to aggregate.
     */
    where?: InterviewSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewSchedules to fetch.
     */
    orderBy?: InterviewSchedulesOrderByWithRelationInput | InterviewSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterviewSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterviewSchedules
    **/
    _count?: true | InterviewSchedulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterviewSchedulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterviewSchedulesMaxAggregateInputType
  }

  export type GetInterviewSchedulesAggregateType<T extends InterviewSchedulesAggregateArgs> = {
        [P in keyof T & keyof AggregateInterviewSchedules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterviewSchedules[P]>
      : GetScalarType<T[P], AggregateInterviewSchedules[P]>
  }




  export type InterviewSchedulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterviewSchedulesWhereInput
    orderBy?: InterviewSchedulesOrderByWithAggregationInput | InterviewSchedulesOrderByWithAggregationInput[]
    by: InterviewSchedulesScalarFieldEnum[] | InterviewSchedulesScalarFieldEnum
    having?: InterviewSchedulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterviewSchedulesCountAggregateInputType | true
    _min?: InterviewSchedulesMinAggregateInputType
    _max?: InterviewSchedulesMaxAggregateInputType
  }

  export type InterviewSchedulesGroupByOutputType = {
    id: string
    applicantId: string
    jobId: string
    scheduleDate: Date
    scheduleTime: Date
    location: string | null
    status: $Enums.ScheduleStatus
    mode: $Enums.InterviewMode
    createdAt: Date
    updatedAt: Date
    _count: InterviewSchedulesCountAggregateOutputType | null
    _min: InterviewSchedulesMinAggregateOutputType | null
    _max: InterviewSchedulesMaxAggregateOutputType | null
  }

  type GetInterviewSchedulesGroupByPayload<T extends InterviewSchedulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterviewSchedulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterviewSchedulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterviewSchedulesGroupByOutputType[P]>
            : GetScalarType<T[P], InterviewSchedulesGroupByOutputType[P]>
        }
      >
    >


  export type InterviewSchedulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    jobId?: boolean
    scheduleDate?: boolean
    scheduleTime?: boolean
    location?: boolean
    status?: boolean
    mode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewSchedules"]>

  export type InterviewSchedulesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    jobId?: boolean
    scheduleDate?: boolean
    scheduleTime?: boolean
    location?: boolean
    status?: boolean
    mode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewSchedules"]>

  export type InterviewSchedulesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    jobId?: boolean
    scheduleDate?: boolean
    scheduleTime?: boolean
    location?: boolean
    status?: boolean
    mode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interviewSchedules"]>

  export type InterviewSchedulesSelectScalar = {
    id?: boolean
    applicantId?: boolean
    jobId?: boolean
    scheduleDate?: boolean
    scheduleTime?: boolean
    location?: boolean
    status?: boolean
    mode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InterviewSchedulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicantId" | "jobId" | "scheduleDate" | "scheduleTime" | "location" | "status" | "mode" | "createdAt" | "updatedAt", ExtArgs["result"]["interviewSchedules"]>
  export type InterviewSchedulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }
  export type InterviewSchedulesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }
  export type InterviewSchedulesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }

  export type $InterviewSchedulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterviewSchedules"
    objects: {
      applicant: Prisma.$ApplicantsPayload<ExtArgs>
      job: Prisma.$JobsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicantId: string
      jobId: string
      scheduleDate: Date
      scheduleTime: Date
      location: string | null
      status: $Enums.ScheduleStatus
      mode: $Enums.InterviewMode
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["interviewSchedules"]>
    composites: {}
  }

  type InterviewSchedulesGetPayload<S extends boolean | null | undefined | InterviewSchedulesDefaultArgs> = $Result.GetResult<Prisma.$InterviewSchedulesPayload, S>

  type InterviewSchedulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterviewSchedulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterviewSchedulesCountAggregateInputType | true
    }

  export interface InterviewSchedulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterviewSchedules'], meta: { name: 'InterviewSchedules' } }
    /**
     * Find zero or one InterviewSchedules that matches the filter.
     * @param {InterviewSchedulesFindUniqueArgs} args - Arguments to find a InterviewSchedules
     * @example
     * // Get one InterviewSchedules
     * const interviewSchedules = await prisma.interviewSchedules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterviewSchedulesFindUniqueArgs>(args: SelectSubset<T, InterviewSchedulesFindUniqueArgs<ExtArgs>>): Prisma__InterviewSchedulesClient<$Result.GetResult<Prisma.$InterviewSchedulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterviewSchedules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterviewSchedulesFindUniqueOrThrowArgs} args - Arguments to find a InterviewSchedules
     * @example
     * // Get one InterviewSchedules
     * const interviewSchedules = await prisma.interviewSchedules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterviewSchedulesFindUniqueOrThrowArgs>(args: SelectSubset<T, InterviewSchedulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterviewSchedulesClient<$Result.GetResult<Prisma.$InterviewSchedulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSchedulesFindFirstArgs} args - Arguments to find a InterviewSchedules
     * @example
     * // Get one InterviewSchedules
     * const interviewSchedules = await prisma.interviewSchedules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterviewSchedulesFindFirstArgs>(args?: SelectSubset<T, InterviewSchedulesFindFirstArgs<ExtArgs>>): Prisma__InterviewSchedulesClient<$Result.GetResult<Prisma.$InterviewSchedulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterviewSchedules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSchedulesFindFirstOrThrowArgs} args - Arguments to find a InterviewSchedules
     * @example
     * // Get one InterviewSchedules
     * const interviewSchedules = await prisma.interviewSchedules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterviewSchedulesFindFirstOrThrowArgs>(args?: SelectSubset<T, InterviewSchedulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterviewSchedulesClient<$Result.GetResult<Prisma.$InterviewSchedulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterviewSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSchedulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterviewSchedules
     * const interviewSchedules = await prisma.interviewSchedules.findMany()
     * 
     * // Get first 10 InterviewSchedules
     * const interviewSchedules = await prisma.interviewSchedules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interviewSchedulesWithIdOnly = await prisma.interviewSchedules.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterviewSchedulesFindManyArgs>(args?: SelectSubset<T, InterviewSchedulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewSchedulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterviewSchedules.
     * @param {InterviewSchedulesCreateArgs} args - Arguments to create a InterviewSchedules.
     * @example
     * // Create one InterviewSchedules
     * const InterviewSchedules = await prisma.interviewSchedules.create({
     *   data: {
     *     // ... data to create a InterviewSchedules
     *   }
     * })
     * 
     */
    create<T extends InterviewSchedulesCreateArgs>(args: SelectSubset<T, InterviewSchedulesCreateArgs<ExtArgs>>): Prisma__InterviewSchedulesClient<$Result.GetResult<Prisma.$InterviewSchedulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterviewSchedules.
     * @param {InterviewSchedulesCreateManyArgs} args - Arguments to create many InterviewSchedules.
     * @example
     * // Create many InterviewSchedules
     * const interviewSchedules = await prisma.interviewSchedules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterviewSchedulesCreateManyArgs>(args?: SelectSubset<T, InterviewSchedulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InterviewSchedules and returns the data saved in the database.
     * @param {InterviewSchedulesCreateManyAndReturnArgs} args - Arguments to create many InterviewSchedules.
     * @example
     * // Create many InterviewSchedules
     * const interviewSchedules = await prisma.interviewSchedules.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InterviewSchedules and only return the `id`
     * const interviewSchedulesWithIdOnly = await prisma.interviewSchedules.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterviewSchedulesCreateManyAndReturnArgs>(args?: SelectSubset<T, InterviewSchedulesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewSchedulesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InterviewSchedules.
     * @param {InterviewSchedulesDeleteArgs} args - Arguments to delete one InterviewSchedules.
     * @example
     * // Delete one InterviewSchedules
     * const InterviewSchedules = await prisma.interviewSchedules.delete({
     *   where: {
     *     // ... filter to delete one InterviewSchedules
     *   }
     * })
     * 
     */
    delete<T extends InterviewSchedulesDeleteArgs>(args: SelectSubset<T, InterviewSchedulesDeleteArgs<ExtArgs>>): Prisma__InterviewSchedulesClient<$Result.GetResult<Prisma.$InterviewSchedulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterviewSchedules.
     * @param {InterviewSchedulesUpdateArgs} args - Arguments to update one InterviewSchedules.
     * @example
     * // Update one InterviewSchedules
     * const interviewSchedules = await prisma.interviewSchedules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterviewSchedulesUpdateArgs>(args: SelectSubset<T, InterviewSchedulesUpdateArgs<ExtArgs>>): Prisma__InterviewSchedulesClient<$Result.GetResult<Prisma.$InterviewSchedulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterviewSchedules.
     * @param {InterviewSchedulesDeleteManyArgs} args - Arguments to filter InterviewSchedules to delete.
     * @example
     * // Delete a few InterviewSchedules
     * const { count } = await prisma.interviewSchedules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterviewSchedulesDeleteManyArgs>(args?: SelectSubset<T, InterviewSchedulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSchedulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterviewSchedules
     * const interviewSchedules = await prisma.interviewSchedules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterviewSchedulesUpdateManyArgs>(args: SelectSubset<T, InterviewSchedulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterviewSchedules and returns the data updated in the database.
     * @param {InterviewSchedulesUpdateManyAndReturnArgs} args - Arguments to update many InterviewSchedules.
     * @example
     * // Update many InterviewSchedules
     * const interviewSchedules = await prisma.interviewSchedules.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InterviewSchedules and only return the `id`
     * const interviewSchedulesWithIdOnly = await prisma.interviewSchedules.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterviewSchedulesUpdateManyAndReturnArgs>(args: SelectSubset<T, InterviewSchedulesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterviewSchedulesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InterviewSchedules.
     * @param {InterviewSchedulesUpsertArgs} args - Arguments to update or create a InterviewSchedules.
     * @example
     * // Update or create a InterviewSchedules
     * const interviewSchedules = await prisma.interviewSchedules.upsert({
     *   create: {
     *     // ... data to create a InterviewSchedules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterviewSchedules we want to update
     *   }
     * })
     */
    upsert<T extends InterviewSchedulesUpsertArgs>(args: SelectSubset<T, InterviewSchedulesUpsertArgs<ExtArgs>>): Prisma__InterviewSchedulesClient<$Result.GetResult<Prisma.$InterviewSchedulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterviewSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSchedulesCountArgs} args - Arguments to filter InterviewSchedules to count.
     * @example
     * // Count the number of InterviewSchedules
     * const count = await prisma.interviewSchedules.count({
     *   where: {
     *     // ... the filter for the InterviewSchedules we want to count
     *   }
     * })
    **/
    count<T extends InterviewSchedulesCountArgs>(
      args?: Subset<T, InterviewSchedulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterviewSchedulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterviewSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSchedulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterviewSchedulesAggregateArgs>(args: Subset<T, InterviewSchedulesAggregateArgs>): Prisma.PrismaPromise<GetInterviewSchedulesAggregateType<T>>

    /**
     * Group by InterviewSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterviewSchedulesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterviewSchedulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterviewSchedulesGroupByArgs['orderBy'] }
        : { orderBy?: InterviewSchedulesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterviewSchedulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterviewSchedulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterviewSchedules model
   */
  readonly fields: InterviewSchedulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterviewSchedules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterviewSchedulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends ApplicantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicantsDefaultArgs<ExtArgs>>): Prisma__ApplicantsClient<$Result.GetResult<Prisma.$ApplicantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    job<T extends JobsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobsDefaultArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InterviewSchedules model
   */
  interface InterviewSchedulesFieldRefs {
    readonly id: FieldRef<"InterviewSchedules", 'String'>
    readonly applicantId: FieldRef<"InterviewSchedules", 'String'>
    readonly jobId: FieldRef<"InterviewSchedules", 'String'>
    readonly scheduleDate: FieldRef<"InterviewSchedules", 'DateTime'>
    readonly scheduleTime: FieldRef<"InterviewSchedules", 'DateTime'>
    readonly location: FieldRef<"InterviewSchedules", 'String'>
    readonly status: FieldRef<"InterviewSchedules", 'ScheduleStatus'>
    readonly mode: FieldRef<"InterviewSchedules", 'InterviewMode'>
    readonly createdAt: FieldRef<"InterviewSchedules", 'DateTime'>
    readonly updatedAt: FieldRef<"InterviewSchedules", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InterviewSchedules findUnique
   */
  export type InterviewSchedulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSchedules
     */
    select?: InterviewSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSchedules
     */
    omit?: InterviewSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSchedulesInclude<ExtArgs> | null
    /**
     * Filter, which InterviewSchedules to fetch.
     */
    where: InterviewSchedulesWhereUniqueInput
  }

  /**
   * InterviewSchedules findUniqueOrThrow
   */
  export type InterviewSchedulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSchedules
     */
    select?: InterviewSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSchedules
     */
    omit?: InterviewSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSchedulesInclude<ExtArgs> | null
    /**
     * Filter, which InterviewSchedules to fetch.
     */
    where: InterviewSchedulesWhereUniqueInput
  }

  /**
   * InterviewSchedules findFirst
   */
  export type InterviewSchedulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSchedules
     */
    select?: InterviewSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSchedules
     */
    omit?: InterviewSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSchedulesInclude<ExtArgs> | null
    /**
     * Filter, which InterviewSchedules to fetch.
     */
    where?: InterviewSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewSchedules to fetch.
     */
    orderBy?: InterviewSchedulesOrderByWithRelationInput | InterviewSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewSchedules.
     */
    cursor?: InterviewSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewSchedules.
     */
    distinct?: InterviewSchedulesScalarFieldEnum | InterviewSchedulesScalarFieldEnum[]
  }

  /**
   * InterviewSchedules findFirstOrThrow
   */
  export type InterviewSchedulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSchedules
     */
    select?: InterviewSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSchedules
     */
    omit?: InterviewSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSchedulesInclude<ExtArgs> | null
    /**
     * Filter, which InterviewSchedules to fetch.
     */
    where?: InterviewSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewSchedules to fetch.
     */
    orderBy?: InterviewSchedulesOrderByWithRelationInput | InterviewSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterviewSchedules.
     */
    cursor?: InterviewSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterviewSchedules.
     */
    distinct?: InterviewSchedulesScalarFieldEnum | InterviewSchedulesScalarFieldEnum[]
  }

  /**
   * InterviewSchedules findMany
   */
  export type InterviewSchedulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSchedules
     */
    select?: InterviewSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSchedules
     */
    omit?: InterviewSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSchedulesInclude<ExtArgs> | null
    /**
     * Filter, which InterviewSchedules to fetch.
     */
    where?: InterviewSchedulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterviewSchedules to fetch.
     */
    orderBy?: InterviewSchedulesOrderByWithRelationInput | InterviewSchedulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterviewSchedules.
     */
    cursor?: InterviewSchedulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterviewSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterviewSchedules.
     */
    skip?: number
    distinct?: InterviewSchedulesScalarFieldEnum | InterviewSchedulesScalarFieldEnum[]
  }

  /**
   * InterviewSchedules create
   */
  export type InterviewSchedulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSchedules
     */
    select?: InterviewSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSchedules
     */
    omit?: InterviewSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSchedulesInclude<ExtArgs> | null
    /**
     * The data needed to create a InterviewSchedules.
     */
    data: XOR<InterviewSchedulesCreateInput, InterviewSchedulesUncheckedCreateInput>
  }

  /**
   * InterviewSchedules createMany
   */
  export type InterviewSchedulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterviewSchedules.
     */
    data: InterviewSchedulesCreateManyInput | InterviewSchedulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterviewSchedules createManyAndReturn
   */
  export type InterviewSchedulesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSchedules
     */
    select?: InterviewSchedulesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSchedules
     */
    omit?: InterviewSchedulesOmit<ExtArgs> | null
    /**
     * The data used to create many InterviewSchedules.
     */
    data: InterviewSchedulesCreateManyInput | InterviewSchedulesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSchedulesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewSchedules update
   */
  export type InterviewSchedulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSchedules
     */
    select?: InterviewSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSchedules
     */
    omit?: InterviewSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSchedulesInclude<ExtArgs> | null
    /**
     * The data needed to update a InterviewSchedules.
     */
    data: XOR<InterviewSchedulesUpdateInput, InterviewSchedulesUncheckedUpdateInput>
    /**
     * Choose, which InterviewSchedules to update.
     */
    where: InterviewSchedulesWhereUniqueInput
  }

  /**
   * InterviewSchedules updateMany
   */
  export type InterviewSchedulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterviewSchedules.
     */
    data: XOR<InterviewSchedulesUpdateManyMutationInput, InterviewSchedulesUncheckedUpdateManyInput>
    /**
     * Filter which InterviewSchedules to update
     */
    where?: InterviewSchedulesWhereInput
    /**
     * Limit how many InterviewSchedules to update.
     */
    limit?: number
  }

  /**
   * InterviewSchedules updateManyAndReturn
   */
  export type InterviewSchedulesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSchedules
     */
    select?: InterviewSchedulesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSchedules
     */
    omit?: InterviewSchedulesOmit<ExtArgs> | null
    /**
     * The data used to update InterviewSchedules.
     */
    data: XOR<InterviewSchedulesUpdateManyMutationInput, InterviewSchedulesUncheckedUpdateManyInput>
    /**
     * Filter which InterviewSchedules to update
     */
    where?: InterviewSchedulesWhereInput
    /**
     * Limit how many InterviewSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSchedulesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InterviewSchedules upsert
   */
  export type InterviewSchedulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSchedules
     */
    select?: InterviewSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSchedules
     */
    omit?: InterviewSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSchedulesInclude<ExtArgs> | null
    /**
     * The filter to search for the InterviewSchedules to update in case it exists.
     */
    where: InterviewSchedulesWhereUniqueInput
    /**
     * In case the InterviewSchedules found by the `where` argument doesn't exist, create a new InterviewSchedules with this data.
     */
    create: XOR<InterviewSchedulesCreateInput, InterviewSchedulesUncheckedCreateInput>
    /**
     * In case the InterviewSchedules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterviewSchedulesUpdateInput, InterviewSchedulesUncheckedUpdateInput>
  }

  /**
   * InterviewSchedules delete
   */
  export type InterviewSchedulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSchedules
     */
    select?: InterviewSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSchedules
     */
    omit?: InterviewSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSchedulesInclude<ExtArgs> | null
    /**
     * Filter which InterviewSchedules to delete.
     */
    where: InterviewSchedulesWhereUniqueInput
  }

  /**
   * InterviewSchedules deleteMany
   */
  export type InterviewSchedulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterviewSchedules to delete
     */
    where?: InterviewSchedulesWhereInput
    /**
     * Limit how many InterviewSchedules to delete.
     */
    limit?: number
  }

  /**
   * InterviewSchedules without action
   */
  export type InterviewSchedulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterviewSchedules
     */
    select?: InterviewSchedulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterviewSchedules
     */
    omit?: InterviewSchedulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterviewSchedulesInclude<ExtArgs> | null
  }


  /**
   * Model ApplicantJobs
   */

  export type AggregateApplicantJobs = {
    _count: ApplicantJobsCountAggregateOutputType | null
    _min: ApplicantJobsMinAggregateOutputType | null
    _max: ApplicantJobsMaxAggregateOutputType | null
  }

  export type ApplicantJobsMinAggregateOutputType = {
    id: string | null
    applicantId: string | null
    jobId: string | null
    status: $Enums.JobStatus | null
    appliedAt: Date | null
  }

  export type ApplicantJobsMaxAggregateOutputType = {
    id: string | null
    applicantId: string | null
    jobId: string | null
    status: $Enums.JobStatus | null
    appliedAt: Date | null
  }

  export type ApplicantJobsCountAggregateOutputType = {
    id: number
    applicantId: number
    jobId: number
    status: number
    appliedAt: number
    _all: number
  }


  export type ApplicantJobsMinAggregateInputType = {
    id?: true
    applicantId?: true
    jobId?: true
    status?: true
    appliedAt?: true
  }

  export type ApplicantJobsMaxAggregateInputType = {
    id?: true
    applicantId?: true
    jobId?: true
    status?: true
    appliedAt?: true
  }

  export type ApplicantJobsCountAggregateInputType = {
    id?: true
    applicantId?: true
    jobId?: true
    status?: true
    appliedAt?: true
    _all?: true
  }

  export type ApplicantJobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicantJobs to aggregate.
     */
    where?: ApplicantJobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicantJobs to fetch.
     */
    orderBy?: ApplicantJobsOrderByWithRelationInput | ApplicantJobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicantJobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicantJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicantJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicantJobs
    **/
    _count?: true | ApplicantJobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicantJobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicantJobsMaxAggregateInputType
  }

  export type GetApplicantJobsAggregateType<T extends ApplicantJobsAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicantJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicantJobs[P]>
      : GetScalarType<T[P], AggregateApplicantJobs[P]>
  }




  export type ApplicantJobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicantJobsWhereInput
    orderBy?: ApplicantJobsOrderByWithAggregationInput | ApplicantJobsOrderByWithAggregationInput[]
    by: ApplicantJobsScalarFieldEnum[] | ApplicantJobsScalarFieldEnum
    having?: ApplicantJobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicantJobsCountAggregateInputType | true
    _min?: ApplicantJobsMinAggregateInputType
    _max?: ApplicantJobsMaxAggregateInputType
  }

  export type ApplicantJobsGroupByOutputType = {
    id: string
    applicantId: string
    jobId: string
    status: $Enums.JobStatus
    appliedAt: Date
    _count: ApplicantJobsCountAggregateOutputType | null
    _min: ApplicantJobsMinAggregateOutputType | null
    _max: ApplicantJobsMaxAggregateOutputType | null
  }

  type GetApplicantJobsGroupByPayload<T extends ApplicantJobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicantJobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicantJobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicantJobsGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicantJobsGroupByOutputType[P]>
        }
      >
    >


  export type ApplicantJobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    jobId?: boolean
    status?: boolean
    appliedAt?: boolean
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicantJobs"]>

  export type ApplicantJobsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    jobId?: boolean
    status?: boolean
    appliedAt?: boolean
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicantJobs"]>

  export type ApplicantJobsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    jobId?: boolean
    status?: boolean
    appliedAt?: boolean
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicantJobs"]>

  export type ApplicantJobsSelectScalar = {
    id?: boolean
    applicantId?: boolean
    jobId?: boolean
    status?: boolean
    appliedAt?: boolean
  }

  export type ApplicantJobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicantId" | "jobId" | "status" | "appliedAt", ExtArgs["result"]["applicantJobs"]>
  export type ApplicantJobsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }
  export type ApplicantJobsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }
  export type ApplicantJobsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantsDefaultArgs<ExtArgs>
    job?: boolean | JobsDefaultArgs<ExtArgs>
  }

  export type $ApplicantJobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicantJobs"
    objects: {
      applicant: Prisma.$ApplicantsPayload<ExtArgs>
      job: Prisma.$JobsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicantId: string
      jobId: string
      status: $Enums.JobStatus
      appliedAt: Date
    }, ExtArgs["result"]["applicantJobs"]>
    composites: {}
  }

  type ApplicantJobsGetPayload<S extends boolean | null | undefined | ApplicantJobsDefaultArgs> = $Result.GetResult<Prisma.$ApplicantJobsPayload, S>

  type ApplicantJobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicantJobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicantJobsCountAggregateInputType | true
    }

  export interface ApplicantJobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicantJobs'], meta: { name: 'ApplicantJobs' } }
    /**
     * Find zero or one ApplicantJobs that matches the filter.
     * @param {ApplicantJobsFindUniqueArgs} args - Arguments to find a ApplicantJobs
     * @example
     * // Get one ApplicantJobs
     * const applicantJobs = await prisma.applicantJobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicantJobsFindUniqueArgs>(args: SelectSubset<T, ApplicantJobsFindUniqueArgs<ExtArgs>>): Prisma__ApplicantJobsClient<$Result.GetResult<Prisma.$ApplicantJobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplicantJobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicantJobsFindUniqueOrThrowArgs} args - Arguments to find a ApplicantJobs
     * @example
     * // Get one ApplicantJobs
     * const applicantJobs = await prisma.applicantJobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicantJobsFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicantJobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicantJobsClient<$Result.GetResult<Prisma.$ApplicantJobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicantJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantJobsFindFirstArgs} args - Arguments to find a ApplicantJobs
     * @example
     * // Get one ApplicantJobs
     * const applicantJobs = await prisma.applicantJobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicantJobsFindFirstArgs>(args?: SelectSubset<T, ApplicantJobsFindFirstArgs<ExtArgs>>): Prisma__ApplicantJobsClient<$Result.GetResult<Prisma.$ApplicantJobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicantJobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantJobsFindFirstOrThrowArgs} args - Arguments to find a ApplicantJobs
     * @example
     * // Get one ApplicantJobs
     * const applicantJobs = await prisma.applicantJobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicantJobsFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicantJobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicantJobsClient<$Result.GetResult<Prisma.$ApplicantJobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplicantJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantJobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicantJobs
     * const applicantJobs = await prisma.applicantJobs.findMany()
     * 
     * // Get first 10 ApplicantJobs
     * const applicantJobs = await prisma.applicantJobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicantJobsWithIdOnly = await prisma.applicantJobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicantJobsFindManyArgs>(args?: SelectSubset<T, ApplicantJobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantJobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplicantJobs.
     * @param {ApplicantJobsCreateArgs} args - Arguments to create a ApplicantJobs.
     * @example
     * // Create one ApplicantJobs
     * const ApplicantJobs = await prisma.applicantJobs.create({
     *   data: {
     *     // ... data to create a ApplicantJobs
     *   }
     * })
     * 
     */
    create<T extends ApplicantJobsCreateArgs>(args: SelectSubset<T, ApplicantJobsCreateArgs<ExtArgs>>): Prisma__ApplicantJobsClient<$Result.GetResult<Prisma.$ApplicantJobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplicantJobs.
     * @param {ApplicantJobsCreateManyArgs} args - Arguments to create many ApplicantJobs.
     * @example
     * // Create many ApplicantJobs
     * const applicantJobs = await prisma.applicantJobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicantJobsCreateManyArgs>(args?: SelectSubset<T, ApplicantJobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplicantJobs and returns the data saved in the database.
     * @param {ApplicantJobsCreateManyAndReturnArgs} args - Arguments to create many ApplicantJobs.
     * @example
     * // Create many ApplicantJobs
     * const applicantJobs = await prisma.applicantJobs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplicantJobs and only return the `id`
     * const applicantJobsWithIdOnly = await prisma.applicantJobs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicantJobsCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicantJobsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantJobsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplicantJobs.
     * @param {ApplicantJobsDeleteArgs} args - Arguments to delete one ApplicantJobs.
     * @example
     * // Delete one ApplicantJobs
     * const ApplicantJobs = await prisma.applicantJobs.delete({
     *   where: {
     *     // ... filter to delete one ApplicantJobs
     *   }
     * })
     * 
     */
    delete<T extends ApplicantJobsDeleteArgs>(args: SelectSubset<T, ApplicantJobsDeleteArgs<ExtArgs>>): Prisma__ApplicantJobsClient<$Result.GetResult<Prisma.$ApplicantJobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplicantJobs.
     * @param {ApplicantJobsUpdateArgs} args - Arguments to update one ApplicantJobs.
     * @example
     * // Update one ApplicantJobs
     * const applicantJobs = await prisma.applicantJobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicantJobsUpdateArgs>(args: SelectSubset<T, ApplicantJobsUpdateArgs<ExtArgs>>): Prisma__ApplicantJobsClient<$Result.GetResult<Prisma.$ApplicantJobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplicantJobs.
     * @param {ApplicantJobsDeleteManyArgs} args - Arguments to filter ApplicantJobs to delete.
     * @example
     * // Delete a few ApplicantJobs
     * const { count } = await prisma.applicantJobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicantJobsDeleteManyArgs>(args?: SelectSubset<T, ApplicantJobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicantJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantJobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicantJobs
     * const applicantJobs = await prisma.applicantJobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicantJobsUpdateManyArgs>(args: SelectSubset<T, ApplicantJobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicantJobs and returns the data updated in the database.
     * @param {ApplicantJobsUpdateManyAndReturnArgs} args - Arguments to update many ApplicantJobs.
     * @example
     * // Update many ApplicantJobs
     * const applicantJobs = await prisma.applicantJobs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplicantJobs and only return the `id`
     * const applicantJobsWithIdOnly = await prisma.applicantJobs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicantJobsUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicantJobsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantJobsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplicantJobs.
     * @param {ApplicantJobsUpsertArgs} args - Arguments to update or create a ApplicantJobs.
     * @example
     * // Update or create a ApplicantJobs
     * const applicantJobs = await prisma.applicantJobs.upsert({
     *   create: {
     *     // ... data to create a ApplicantJobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicantJobs we want to update
     *   }
     * })
     */
    upsert<T extends ApplicantJobsUpsertArgs>(args: SelectSubset<T, ApplicantJobsUpsertArgs<ExtArgs>>): Prisma__ApplicantJobsClient<$Result.GetResult<Prisma.$ApplicantJobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplicantJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantJobsCountArgs} args - Arguments to filter ApplicantJobs to count.
     * @example
     * // Count the number of ApplicantJobs
     * const count = await prisma.applicantJobs.count({
     *   where: {
     *     // ... the filter for the ApplicantJobs we want to count
     *   }
     * })
    **/
    count<T extends ApplicantJobsCountArgs>(
      args?: Subset<T, ApplicantJobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicantJobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicantJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantJobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicantJobsAggregateArgs>(args: Subset<T, ApplicantJobsAggregateArgs>): Prisma.PrismaPromise<GetApplicantJobsAggregateType<T>>

    /**
     * Group by ApplicantJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantJobsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicantJobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicantJobsGroupByArgs['orderBy'] }
        : { orderBy?: ApplicantJobsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicantJobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicantJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicantJobs model
   */
  readonly fields: ApplicantJobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicantJobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicantJobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends ApplicantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicantsDefaultArgs<ExtArgs>>): Prisma__ApplicantsClient<$Result.GetResult<Prisma.$ApplicantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    job<T extends JobsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobsDefaultArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApplicantJobs model
   */
  interface ApplicantJobsFieldRefs {
    readonly id: FieldRef<"ApplicantJobs", 'String'>
    readonly applicantId: FieldRef<"ApplicantJobs", 'String'>
    readonly jobId: FieldRef<"ApplicantJobs", 'String'>
    readonly status: FieldRef<"ApplicantJobs", 'JobStatus'>
    readonly appliedAt: FieldRef<"ApplicantJobs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApplicantJobs findUnique
   */
  export type ApplicantJobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantJobs
     */
    select?: ApplicantJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicantJobs
     */
    omit?: ApplicantJobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantJobsInclude<ExtArgs> | null
    /**
     * Filter, which ApplicantJobs to fetch.
     */
    where: ApplicantJobsWhereUniqueInput
  }

  /**
   * ApplicantJobs findUniqueOrThrow
   */
  export type ApplicantJobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantJobs
     */
    select?: ApplicantJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicantJobs
     */
    omit?: ApplicantJobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantJobsInclude<ExtArgs> | null
    /**
     * Filter, which ApplicantJobs to fetch.
     */
    where: ApplicantJobsWhereUniqueInput
  }

  /**
   * ApplicantJobs findFirst
   */
  export type ApplicantJobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantJobs
     */
    select?: ApplicantJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicantJobs
     */
    omit?: ApplicantJobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantJobsInclude<ExtArgs> | null
    /**
     * Filter, which ApplicantJobs to fetch.
     */
    where?: ApplicantJobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicantJobs to fetch.
     */
    orderBy?: ApplicantJobsOrderByWithRelationInput | ApplicantJobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicantJobs.
     */
    cursor?: ApplicantJobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicantJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicantJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicantJobs.
     */
    distinct?: ApplicantJobsScalarFieldEnum | ApplicantJobsScalarFieldEnum[]
  }

  /**
   * ApplicantJobs findFirstOrThrow
   */
  export type ApplicantJobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantJobs
     */
    select?: ApplicantJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicantJobs
     */
    omit?: ApplicantJobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantJobsInclude<ExtArgs> | null
    /**
     * Filter, which ApplicantJobs to fetch.
     */
    where?: ApplicantJobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicantJobs to fetch.
     */
    orderBy?: ApplicantJobsOrderByWithRelationInput | ApplicantJobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicantJobs.
     */
    cursor?: ApplicantJobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicantJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicantJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicantJobs.
     */
    distinct?: ApplicantJobsScalarFieldEnum | ApplicantJobsScalarFieldEnum[]
  }

  /**
   * ApplicantJobs findMany
   */
  export type ApplicantJobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantJobs
     */
    select?: ApplicantJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicantJobs
     */
    omit?: ApplicantJobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantJobsInclude<ExtArgs> | null
    /**
     * Filter, which ApplicantJobs to fetch.
     */
    where?: ApplicantJobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicantJobs to fetch.
     */
    orderBy?: ApplicantJobsOrderByWithRelationInput | ApplicantJobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicantJobs.
     */
    cursor?: ApplicantJobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicantJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicantJobs.
     */
    skip?: number
    distinct?: ApplicantJobsScalarFieldEnum | ApplicantJobsScalarFieldEnum[]
  }

  /**
   * ApplicantJobs create
   */
  export type ApplicantJobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantJobs
     */
    select?: ApplicantJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicantJobs
     */
    omit?: ApplicantJobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantJobsInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplicantJobs.
     */
    data: XOR<ApplicantJobsCreateInput, ApplicantJobsUncheckedCreateInput>
  }

  /**
   * ApplicantJobs createMany
   */
  export type ApplicantJobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicantJobs.
     */
    data: ApplicantJobsCreateManyInput | ApplicantJobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApplicantJobs createManyAndReturn
   */
  export type ApplicantJobsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantJobs
     */
    select?: ApplicantJobsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicantJobs
     */
    omit?: ApplicantJobsOmit<ExtArgs> | null
    /**
     * The data used to create many ApplicantJobs.
     */
    data: ApplicantJobsCreateManyInput | ApplicantJobsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantJobsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicantJobs update
   */
  export type ApplicantJobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantJobs
     */
    select?: ApplicantJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicantJobs
     */
    omit?: ApplicantJobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantJobsInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplicantJobs.
     */
    data: XOR<ApplicantJobsUpdateInput, ApplicantJobsUncheckedUpdateInput>
    /**
     * Choose, which ApplicantJobs to update.
     */
    where: ApplicantJobsWhereUniqueInput
  }

  /**
   * ApplicantJobs updateMany
   */
  export type ApplicantJobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicantJobs.
     */
    data: XOR<ApplicantJobsUpdateManyMutationInput, ApplicantJobsUncheckedUpdateManyInput>
    /**
     * Filter which ApplicantJobs to update
     */
    where?: ApplicantJobsWhereInput
    /**
     * Limit how many ApplicantJobs to update.
     */
    limit?: number
  }

  /**
   * ApplicantJobs updateManyAndReturn
   */
  export type ApplicantJobsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantJobs
     */
    select?: ApplicantJobsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicantJobs
     */
    omit?: ApplicantJobsOmit<ExtArgs> | null
    /**
     * The data used to update ApplicantJobs.
     */
    data: XOR<ApplicantJobsUpdateManyMutationInput, ApplicantJobsUncheckedUpdateManyInput>
    /**
     * Filter which ApplicantJobs to update
     */
    where?: ApplicantJobsWhereInput
    /**
     * Limit how many ApplicantJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantJobsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicantJobs upsert
   */
  export type ApplicantJobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantJobs
     */
    select?: ApplicantJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicantJobs
     */
    omit?: ApplicantJobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantJobsInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplicantJobs to update in case it exists.
     */
    where: ApplicantJobsWhereUniqueInput
    /**
     * In case the ApplicantJobs found by the `where` argument doesn't exist, create a new ApplicantJobs with this data.
     */
    create: XOR<ApplicantJobsCreateInput, ApplicantJobsUncheckedCreateInput>
    /**
     * In case the ApplicantJobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicantJobsUpdateInput, ApplicantJobsUncheckedUpdateInput>
  }

  /**
   * ApplicantJobs delete
   */
  export type ApplicantJobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantJobs
     */
    select?: ApplicantJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicantJobs
     */
    omit?: ApplicantJobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantJobsInclude<ExtArgs> | null
    /**
     * Filter which ApplicantJobs to delete.
     */
    where: ApplicantJobsWhereUniqueInput
  }

  /**
   * ApplicantJobs deleteMany
   */
  export type ApplicantJobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicantJobs to delete
     */
    where?: ApplicantJobsWhereInput
    /**
     * Limit how many ApplicantJobs to delete.
     */
    limit?: number
  }

  /**
   * ApplicantJobs without action
   */
  export type ApplicantJobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantJobs
     */
    select?: ApplicantJobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicantJobs
     */
    omit?: ApplicantJobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantJobsInclude<ExtArgs> | null
  }


  /**
   * Model Notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: string | null
    applicantId: string | null
    hrId: string | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: string | null
    applicantId: string | null
    hrId: string | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    applicantId: number
    hrId: number
    title: number
    message: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationsMinAggregateInputType = {
    id?: true
    applicantId?: true
    hrId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    applicantId?: true
    hrId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    applicantId?: true
    hrId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to aggregate.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithAggregationInput | NotificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: string
    applicantId: string | null
    hrId: string | null
    title: string
    message: string
    isRead: boolean
    createdAt: Date
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    hrId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    applicant?: boolean | Notifications$applicantArgs<ExtArgs>
    hr?: boolean | Notifications$hrArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    hrId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    applicant?: boolean | Notifications$applicantArgs<ExtArgs>
    hr?: boolean | Notifications$hrArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicantId?: boolean
    hrId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    applicant?: boolean | Notifications$applicantArgs<ExtArgs>
    hr?: boolean | Notifications$hrArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectScalar = {
    id?: boolean
    applicantId?: boolean
    hrId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicantId" | "hrId" | "title" | "message" | "isRead" | "createdAt", ExtArgs["result"]["notifications"]>
  export type NotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | Notifications$applicantArgs<ExtArgs>
    hr?: boolean | Notifications$hrArgs<ExtArgs>
  }
  export type NotificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | Notifications$applicantArgs<ExtArgs>
    hr?: boolean | Notifications$hrArgs<ExtArgs>
  }
  export type NotificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | Notifications$applicantArgs<ExtArgs>
    hr?: boolean | Notifications$hrArgs<ExtArgs>
  }

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {
      applicant: Prisma.$ApplicantsPayload<ExtArgs> | null
      hr: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicantId: string | null
      hrId: string | null
      title: string
      message: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = $Result.GetResult<Prisma.$NotificationsPayload, S>

  type NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifications'], meta: { name: 'Notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {NotificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsFindUniqueArgs>(args: SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsFindFirstArgs>(args?: SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationsFindManyArgs>(args?: SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {NotificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends NotificationsCreateArgs>(args: SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsCreateManyArgs>(args?: SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {NotificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends NotificationsDeleteArgs>(args: SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {NotificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsUpdateArgs>(args: SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsUpdateManyArgs>(args: SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {NotificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsUpsertArgs>(args: SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationsCountArgs>(
      args?: Subset<T, NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifications model
   */
  readonly fields: NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends Notifications$applicantArgs<ExtArgs> = {}>(args?: Subset<T, Notifications$applicantArgs<ExtArgs>>): Prisma__ApplicantsClient<$Result.GetResult<Prisma.$ApplicantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    hr<T extends Notifications$hrArgs<ExtArgs> = {}>(args?: Subset<T, Notifications$hrArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notifications model
   */
  interface NotificationsFieldRefs {
    readonly id: FieldRef<"Notifications", 'String'>
    readonly applicantId: FieldRef<"Notifications", 'String'>
    readonly hrId: FieldRef<"Notifications", 'String'>
    readonly title: FieldRef<"Notifications", 'String'>
    readonly message: FieldRef<"Notifications", 'String'>
    readonly isRead: FieldRef<"Notifications", 'Boolean'>
    readonly createdAt: FieldRef<"Notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notifications findUnique
   */
  export type NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findUniqueOrThrow
   */
  export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findFirst
   */
  export type NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findFirstOrThrow
   */
  export type NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findMany
   */
  export type NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications create
   */
  export type NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifications.
     */
    data: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
  }

  /**
   * Notifications createMany
   */
  export type NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifications createManyAndReturn
   */
  export type NotificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications update
   */
  export type NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifications.
     */
    data: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
    /**
     * Choose, which Notifications to update.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications updateMany
   */
  export type NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notifications updateManyAndReturn
   */
  export type NotificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications upsert
   */
  export type NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifications to update in case it exists.
     */
    where: NotificationsWhereUniqueInput
    /**
     * In case the Notifications found by the `where` argument doesn't exist, create a new Notifications with this data.
     */
    create: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
    /**
     * In case the Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
  }

  /**
   * Notifications delete
   */
  export type NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter which Notifications to delete.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications deleteMany
   */
  export type NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notifications.applicant
   */
  export type Notifications$applicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicants
     */
    select?: ApplicantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicants
     */
    omit?: ApplicantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantsInclude<ExtArgs> | null
    where?: ApplicantsWhereInput
  }

  /**
   * Notifications.hr
   */
  export type Notifications$hrArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Notifications without action
   */
  export type NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    fullname: 'fullname',
    birthdate: 'birthdate',
    password: 'password',
    isValidated: 'isValidated',
    otp: 'otp',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ApplicantsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    fullname: 'fullname',
    birthdate: 'birthdate',
    about: 'about',
    isValidated: 'isValidated',
    otp: 'otp',
    profileImgUrl: 'profileImgUrl',
    gender: 'gender',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApplicantsScalarFieldEnum = (typeof ApplicantsScalarFieldEnum)[keyof typeof ApplicantsScalarFieldEnum]


  export const JobsScalarFieldEnum: {
    id: 'id',
    position: 'position',
    jobLocType: 'jobLocType',
    empType: 'empType',
    publisherId: 'publisherId',
    qualification: 'qualification',
    description: 'description',
    deadline: 'deadline',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const ResumesScalarFieldEnum: {
    id: 'id',
    applicantId: 'applicantId',
    jobId: 'jobId',
    resumeName: 'resumeName',
    resumeUrl: 'resumeUrl',
    submittedAt: 'submittedAt',
    updatedAt: 'updatedAt'
  };

  export type ResumesScalarFieldEnum = (typeof ResumesScalarFieldEnum)[keyof typeof ResumesScalarFieldEnum]


  export const InterviewSchedulesScalarFieldEnum: {
    id: 'id',
    applicantId: 'applicantId',
    jobId: 'jobId',
    scheduleDate: 'scheduleDate',
    scheduleTime: 'scheduleTime',
    location: 'location',
    status: 'status',
    mode: 'mode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InterviewSchedulesScalarFieldEnum = (typeof InterviewSchedulesScalarFieldEnum)[keyof typeof InterviewSchedulesScalarFieldEnum]


  export const ApplicantJobsScalarFieldEnum: {
    id: 'id',
    applicantId: 'applicantId',
    jobId: 'jobId',
    status: 'status',
    appliedAt: 'appliedAt'
  };

  export type ApplicantJobsScalarFieldEnum = (typeof ApplicantJobsScalarFieldEnum)[keyof typeof ApplicantJobsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    applicantId: 'applicantId',
    hrId: 'hrId',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'JobLocationType'
   */
  export type EnumJobLocationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobLocationType'>
    


  /**
   * Reference to a field of type 'JobLocationType[]'
   */
  export type ListEnumJobLocationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobLocationType[]'>
    


  /**
   * Reference to a field of type 'EmploymentType'
   */
  export type EnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType'>
    


  /**
   * Reference to a field of type 'EmploymentType[]'
   */
  export type ListEnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType[]'>
    


  /**
   * Reference to a field of type 'ScheduleStatus'
   */
  export type EnumScheduleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleStatus'>
    


  /**
   * Reference to a field of type 'ScheduleStatus[]'
   */
  export type ListEnumScheduleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleStatus[]'>
    


  /**
   * Reference to a field of type 'InterviewMode'
   */
  export type EnumInterviewModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewMode'>
    


  /**
   * Reference to a field of type 'InterviewMode[]'
   */
  export type ListEnumInterviewModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterviewMode[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    fullname?: StringFilter<"Users"> | string
    birthdate?: DateTimeFilter<"Users"> | Date | string
    password?: StringFilter<"Users"> | string
    isValidated?: BoolFilter<"Users"> | boolean
    otp?: IntNullableFilter<"Users"> | number | null
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    publishedJobs?: JobsListRelationFilter
    hrNotifications?: NotificationsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    birthdate?: SortOrder
    password?: SortOrder
    isValidated?: SortOrder
    otp?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedJobs?: JobsOrderByRelationAggregateInput
    hrNotifications?: NotificationsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullname?: StringFilter<"Users"> | string
    birthdate?: DateTimeFilter<"Users"> | Date | string
    password?: StringFilter<"Users"> | string
    isValidated?: BoolFilter<"Users"> | boolean
    otp?: IntNullableFilter<"Users"> | number | null
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    publishedJobs?: JobsListRelationFilter
    hrNotifications?: NotificationsListRelationFilter
  }, "id" | "email" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    birthdate?: SortOrder
    password?: SortOrder
    isValidated?: SortOrder
    otp?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    fullname?: StringWithAggregatesFilter<"Users"> | string
    birthdate?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    password?: StringWithAggregatesFilter<"Users"> | string
    isValidated?: BoolWithAggregatesFilter<"Users"> | boolean
    otp?: IntNullableWithAggregatesFilter<"Users"> | number | null
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type ApplicantsWhereInput = {
    AND?: ApplicantsWhereInput | ApplicantsWhereInput[]
    OR?: ApplicantsWhereInput[]
    NOT?: ApplicantsWhereInput | ApplicantsWhereInput[]
    id?: StringFilter<"Applicants"> | string
    email?: StringFilter<"Applicants"> | string
    password?: StringFilter<"Applicants"> | string
    fullname?: StringFilter<"Applicants"> | string
    birthdate?: DateTimeFilter<"Applicants"> | Date | string
    about?: StringNullableFilter<"Applicants"> | string | null
    isValidated?: BoolFilter<"Applicants"> | boolean
    otp?: IntNullableFilter<"Applicants"> | number | null
    profileImgUrl?: StringNullableFilter<"Applicants"> | string | null
    gender?: EnumGenderFilter<"Applicants"> | $Enums.Gender
    createdAt?: DateTimeFilter<"Applicants"> | Date | string
    updatedAt?: DateTimeFilter<"Applicants"> | Date | string
    resumes?: ResumesListRelationFilter
    interviewSchedules?: InterviewSchedulesListRelationFilter
    appliedJobs?: ApplicantJobsListRelationFilter
    notifications?: NotificationsListRelationFilter
  }

  export type ApplicantsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullname?: SortOrder
    birthdate?: SortOrder
    about?: SortOrderInput | SortOrder
    isValidated?: SortOrder
    otp?: SortOrderInput | SortOrder
    profileImgUrl?: SortOrderInput | SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resumes?: ResumesOrderByRelationAggregateInput
    interviewSchedules?: InterviewSchedulesOrderByRelationAggregateInput
    appliedJobs?: ApplicantJobsOrderByRelationAggregateInput
    notifications?: NotificationsOrderByRelationAggregateInput
  }

  export type ApplicantsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ApplicantsWhereInput | ApplicantsWhereInput[]
    OR?: ApplicantsWhereInput[]
    NOT?: ApplicantsWhereInput | ApplicantsWhereInput[]
    password?: StringFilter<"Applicants"> | string
    fullname?: StringFilter<"Applicants"> | string
    birthdate?: DateTimeFilter<"Applicants"> | Date | string
    about?: StringNullableFilter<"Applicants"> | string | null
    isValidated?: BoolFilter<"Applicants"> | boolean
    otp?: IntNullableFilter<"Applicants"> | number | null
    profileImgUrl?: StringNullableFilter<"Applicants"> | string | null
    gender?: EnumGenderFilter<"Applicants"> | $Enums.Gender
    createdAt?: DateTimeFilter<"Applicants"> | Date | string
    updatedAt?: DateTimeFilter<"Applicants"> | Date | string
    resumes?: ResumesListRelationFilter
    interviewSchedules?: InterviewSchedulesListRelationFilter
    appliedJobs?: ApplicantJobsListRelationFilter
    notifications?: NotificationsListRelationFilter
  }, "id" | "email">

  export type ApplicantsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullname?: SortOrder
    birthdate?: SortOrder
    about?: SortOrderInput | SortOrder
    isValidated?: SortOrder
    otp?: SortOrderInput | SortOrder
    profileImgUrl?: SortOrderInput | SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApplicantsCountOrderByAggregateInput
    _avg?: ApplicantsAvgOrderByAggregateInput
    _max?: ApplicantsMaxOrderByAggregateInput
    _min?: ApplicantsMinOrderByAggregateInput
    _sum?: ApplicantsSumOrderByAggregateInput
  }

  export type ApplicantsScalarWhereWithAggregatesInput = {
    AND?: ApplicantsScalarWhereWithAggregatesInput | ApplicantsScalarWhereWithAggregatesInput[]
    OR?: ApplicantsScalarWhereWithAggregatesInput[]
    NOT?: ApplicantsScalarWhereWithAggregatesInput | ApplicantsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Applicants"> | string
    email?: StringWithAggregatesFilter<"Applicants"> | string
    password?: StringWithAggregatesFilter<"Applicants"> | string
    fullname?: StringWithAggregatesFilter<"Applicants"> | string
    birthdate?: DateTimeWithAggregatesFilter<"Applicants"> | Date | string
    about?: StringNullableWithAggregatesFilter<"Applicants"> | string | null
    isValidated?: BoolWithAggregatesFilter<"Applicants"> | boolean
    otp?: IntNullableWithAggregatesFilter<"Applicants"> | number | null
    profileImgUrl?: StringNullableWithAggregatesFilter<"Applicants"> | string | null
    gender?: EnumGenderWithAggregatesFilter<"Applicants"> | $Enums.Gender
    createdAt?: DateTimeWithAggregatesFilter<"Applicants"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Applicants"> | Date | string
  }

  export type JobsWhereInput = {
    AND?: JobsWhereInput | JobsWhereInput[]
    OR?: JobsWhereInput[]
    NOT?: JobsWhereInput | JobsWhereInput[]
    id?: StringFilter<"Jobs"> | string
    position?: StringFilter<"Jobs"> | string
    jobLocType?: EnumJobLocationTypeFilter<"Jobs"> | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFilter<"Jobs"> | $Enums.EmploymentType
    publisherId?: StringFilter<"Jobs"> | string
    qualification?: StringFilter<"Jobs"> | string
    description?: StringFilter<"Jobs"> | string
    deadline?: DateTimeFilter<"Jobs"> | Date | string
    createdAt?: DateTimeFilter<"Jobs"> | Date | string
    updatedAt?: DateTimeFilter<"Jobs"> | Date | string
    publisher?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Resumes?: ResumesListRelationFilter
    interviewSchedules?: InterviewSchedulesListRelationFilter
    applicantJobs?: ApplicantJobsListRelationFilter
  }

  export type JobsOrderByWithRelationInput = {
    id?: SortOrder
    position?: SortOrder
    jobLocType?: SortOrder
    empType?: SortOrder
    publisherId?: SortOrder
    qualification?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publisher?: UsersOrderByWithRelationInput
    Resumes?: ResumesOrderByRelationAggregateInput
    interviewSchedules?: InterviewSchedulesOrderByRelationAggregateInput
    applicantJobs?: ApplicantJobsOrderByRelationAggregateInput
  }

  export type JobsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobsWhereInput | JobsWhereInput[]
    OR?: JobsWhereInput[]
    NOT?: JobsWhereInput | JobsWhereInput[]
    position?: StringFilter<"Jobs"> | string
    jobLocType?: EnumJobLocationTypeFilter<"Jobs"> | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFilter<"Jobs"> | $Enums.EmploymentType
    publisherId?: StringFilter<"Jobs"> | string
    qualification?: StringFilter<"Jobs"> | string
    description?: StringFilter<"Jobs"> | string
    deadline?: DateTimeFilter<"Jobs"> | Date | string
    createdAt?: DateTimeFilter<"Jobs"> | Date | string
    updatedAt?: DateTimeFilter<"Jobs"> | Date | string
    publisher?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Resumes?: ResumesListRelationFilter
    interviewSchedules?: InterviewSchedulesListRelationFilter
    applicantJobs?: ApplicantJobsListRelationFilter
  }, "id">

  export type JobsOrderByWithAggregationInput = {
    id?: SortOrder
    position?: SortOrder
    jobLocType?: SortOrder
    empType?: SortOrder
    publisherId?: SortOrder
    qualification?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobsCountOrderByAggregateInput
    _max?: JobsMaxOrderByAggregateInput
    _min?: JobsMinOrderByAggregateInput
  }

  export type JobsScalarWhereWithAggregatesInput = {
    AND?: JobsScalarWhereWithAggregatesInput | JobsScalarWhereWithAggregatesInput[]
    OR?: JobsScalarWhereWithAggregatesInput[]
    NOT?: JobsScalarWhereWithAggregatesInput | JobsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Jobs"> | string
    position?: StringWithAggregatesFilter<"Jobs"> | string
    jobLocType?: EnumJobLocationTypeWithAggregatesFilter<"Jobs"> | $Enums.JobLocationType
    empType?: EnumEmploymentTypeWithAggregatesFilter<"Jobs"> | $Enums.EmploymentType
    publisherId?: StringWithAggregatesFilter<"Jobs"> | string
    qualification?: StringWithAggregatesFilter<"Jobs"> | string
    description?: StringWithAggregatesFilter<"Jobs"> | string
    deadline?: DateTimeWithAggregatesFilter<"Jobs"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Jobs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Jobs"> | Date | string
  }

  export type ResumesWhereInput = {
    AND?: ResumesWhereInput | ResumesWhereInput[]
    OR?: ResumesWhereInput[]
    NOT?: ResumesWhereInput | ResumesWhereInput[]
    id?: StringFilter<"Resumes"> | string
    applicantId?: StringFilter<"Resumes"> | string
    jobId?: StringFilter<"Resumes"> | string
    resumeName?: StringFilter<"Resumes"> | string
    resumeUrl?: StringFilter<"Resumes"> | string
    submittedAt?: DateTimeFilter<"Resumes"> | Date | string
    updatedAt?: DateTimeFilter<"Resumes"> | Date | string
    applicant?: XOR<ApplicantsScalarRelationFilter, ApplicantsWhereInput>
    job?: XOR<JobsScalarRelationFilter, JobsWhereInput>
  }

  export type ResumesOrderByWithRelationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobId?: SortOrder
    resumeName?: SortOrder
    resumeUrl?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
    applicant?: ApplicantsOrderByWithRelationInput
    job?: JobsOrderByWithRelationInput
  }

  export type ResumesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResumesWhereInput | ResumesWhereInput[]
    OR?: ResumesWhereInput[]
    NOT?: ResumesWhereInput | ResumesWhereInput[]
    applicantId?: StringFilter<"Resumes"> | string
    jobId?: StringFilter<"Resumes"> | string
    resumeName?: StringFilter<"Resumes"> | string
    resumeUrl?: StringFilter<"Resumes"> | string
    submittedAt?: DateTimeFilter<"Resumes"> | Date | string
    updatedAt?: DateTimeFilter<"Resumes"> | Date | string
    applicant?: XOR<ApplicantsScalarRelationFilter, ApplicantsWhereInput>
    job?: XOR<JobsScalarRelationFilter, JobsWhereInput>
  }, "id">

  export type ResumesOrderByWithAggregationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobId?: SortOrder
    resumeName?: SortOrder
    resumeUrl?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResumesCountOrderByAggregateInput
    _max?: ResumesMaxOrderByAggregateInput
    _min?: ResumesMinOrderByAggregateInput
  }

  export type ResumesScalarWhereWithAggregatesInput = {
    AND?: ResumesScalarWhereWithAggregatesInput | ResumesScalarWhereWithAggregatesInput[]
    OR?: ResumesScalarWhereWithAggregatesInput[]
    NOT?: ResumesScalarWhereWithAggregatesInput | ResumesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resumes"> | string
    applicantId?: StringWithAggregatesFilter<"Resumes"> | string
    jobId?: StringWithAggregatesFilter<"Resumes"> | string
    resumeName?: StringWithAggregatesFilter<"Resumes"> | string
    resumeUrl?: StringWithAggregatesFilter<"Resumes"> | string
    submittedAt?: DateTimeWithAggregatesFilter<"Resumes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resumes"> | Date | string
  }

  export type InterviewSchedulesWhereInput = {
    AND?: InterviewSchedulesWhereInput | InterviewSchedulesWhereInput[]
    OR?: InterviewSchedulesWhereInput[]
    NOT?: InterviewSchedulesWhereInput | InterviewSchedulesWhereInput[]
    id?: StringFilter<"InterviewSchedules"> | string
    applicantId?: StringFilter<"InterviewSchedules"> | string
    jobId?: StringFilter<"InterviewSchedules"> | string
    scheduleDate?: DateTimeFilter<"InterviewSchedules"> | Date | string
    scheduleTime?: DateTimeFilter<"InterviewSchedules"> | Date | string
    location?: StringNullableFilter<"InterviewSchedules"> | string | null
    status?: EnumScheduleStatusFilter<"InterviewSchedules"> | $Enums.ScheduleStatus
    mode?: EnumInterviewModeFilter<"InterviewSchedules"> | $Enums.InterviewMode
    createdAt?: DateTimeFilter<"InterviewSchedules"> | Date | string
    updatedAt?: DateTimeFilter<"InterviewSchedules"> | Date | string
    applicant?: XOR<ApplicantsScalarRelationFilter, ApplicantsWhereInput>
    job?: XOR<JobsScalarRelationFilter, JobsWhereInput>
  }

  export type InterviewSchedulesOrderByWithRelationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobId?: SortOrder
    scheduleDate?: SortOrder
    scheduleTime?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicant?: ApplicantsOrderByWithRelationInput
    job?: JobsOrderByWithRelationInput
  }

  export type InterviewSchedulesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InterviewSchedulesWhereInput | InterviewSchedulesWhereInput[]
    OR?: InterviewSchedulesWhereInput[]
    NOT?: InterviewSchedulesWhereInput | InterviewSchedulesWhereInput[]
    applicantId?: StringFilter<"InterviewSchedules"> | string
    jobId?: StringFilter<"InterviewSchedules"> | string
    scheduleDate?: DateTimeFilter<"InterviewSchedules"> | Date | string
    scheduleTime?: DateTimeFilter<"InterviewSchedules"> | Date | string
    location?: StringNullableFilter<"InterviewSchedules"> | string | null
    status?: EnumScheduleStatusFilter<"InterviewSchedules"> | $Enums.ScheduleStatus
    mode?: EnumInterviewModeFilter<"InterviewSchedules"> | $Enums.InterviewMode
    createdAt?: DateTimeFilter<"InterviewSchedules"> | Date | string
    updatedAt?: DateTimeFilter<"InterviewSchedules"> | Date | string
    applicant?: XOR<ApplicantsScalarRelationFilter, ApplicantsWhereInput>
    job?: XOR<JobsScalarRelationFilter, JobsWhereInput>
  }, "id">

  export type InterviewSchedulesOrderByWithAggregationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobId?: SortOrder
    scheduleDate?: SortOrder
    scheduleTime?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InterviewSchedulesCountOrderByAggregateInput
    _max?: InterviewSchedulesMaxOrderByAggregateInput
    _min?: InterviewSchedulesMinOrderByAggregateInput
  }

  export type InterviewSchedulesScalarWhereWithAggregatesInput = {
    AND?: InterviewSchedulesScalarWhereWithAggregatesInput | InterviewSchedulesScalarWhereWithAggregatesInput[]
    OR?: InterviewSchedulesScalarWhereWithAggregatesInput[]
    NOT?: InterviewSchedulesScalarWhereWithAggregatesInput | InterviewSchedulesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InterviewSchedules"> | string
    applicantId?: StringWithAggregatesFilter<"InterviewSchedules"> | string
    jobId?: StringWithAggregatesFilter<"InterviewSchedules"> | string
    scheduleDate?: DateTimeWithAggregatesFilter<"InterviewSchedules"> | Date | string
    scheduleTime?: DateTimeWithAggregatesFilter<"InterviewSchedules"> | Date | string
    location?: StringNullableWithAggregatesFilter<"InterviewSchedules"> | string | null
    status?: EnumScheduleStatusWithAggregatesFilter<"InterviewSchedules"> | $Enums.ScheduleStatus
    mode?: EnumInterviewModeWithAggregatesFilter<"InterviewSchedules"> | $Enums.InterviewMode
    createdAt?: DateTimeWithAggregatesFilter<"InterviewSchedules"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InterviewSchedules"> | Date | string
  }

  export type ApplicantJobsWhereInput = {
    AND?: ApplicantJobsWhereInput | ApplicantJobsWhereInput[]
    OR?: ApplicantJobsWhereInput[]
    NOT?: ApplicantJobsWhereInput | ApplicantJobsWhereInput[]
    id?: StringFilter<"ApplicantJobs"> | string
    applicantId?: StringFilter<"ApplicantJobs"> | string
    jobId?: StringFilter<"ApplicantJobs"> | string
    status?: EnumJobStatusFilter<"ApplicantJobs"> | $Enums.JobStatus
    appliedAt?: DateTimeFilter<"ApplicantJobs"> | Date | string
    applicant?: XOR<ApplicantsScalarRelationFilter, ApplicantsWhereInput>
    job?: XOR<JobsScalarRelationFilter, JobsWhereInput>
  }

  export type ApplicantJobsOrderByWithRelationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    applicant?: ApplicantsOrderByWithRelationInput
    job?: JobsOrderByWithRelationInput
  }

  export type ApplicantJobsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApplicantJobsWhereInput | ApplicantJobsWhereInput[]
    OR?: ApplicantJobsWhereInput[]
    NOT?: ApplicantJobsWhereInput | ApplicantJobsWhereInput[]
    applicantId?: StringFilter<"ApplicantJobs"> | string
    jobId?: StringFilter<"ApplicantJobs"> | string
    status?: EnumJobStatusFilter<"ApplicantJobs"> | $Enums.JobStatus
    appliedAt?: DateTimeFilter<"ApplicantJobs"> | Date | string
    applicant?: XOR<ApplicantsScalarRelationFilter, ApplicantsWhereInput>
    job?: XOR<JobsScalarRelationFilter, JobsWhereInput>
  }, "id">

  export type ApplicantJobsOrderByWithAggregationInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    _count?: ApplicantJobsCountOrderByAggregateInput
    _max?: ApplicantJobsMaxOrderByAggregateInput
    _min?: ApplicantJobsMinOrderByAggregateInput
  }

  export type ApplicantJobsScalarWhereWithAggregatesInput = {
    AND?: ApplicantJobsScalarWhereWithAggregatesInput | ApplicantJobsScalarWhereWithAggregatesInput[]
    OR?: ApplicantJobsScalarWhereWithAggregatesInput[]
    NOT?: ApplicantJobsScalarWhereWithAggregatesInput | ApplicantJobsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApplicantJobs"> | string
    applicantId?: StringWithAggregatesFilter<"ApplicantJobs"> | string
    jobId?: StringWithAggregatesFilter<"ApplicantJobs"> | string
    status?: EnumJobStatusWithAggregatesFilter<"ApplicantJobs"> | $Enums.JobStatus
    appliedAt?: DateTimeWithAggregatesFilter<"ApplicantJobs"> | Date | string
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    id?: StringFilter<"Notifications"> | string
    applicantId?: StringNullableFilter<"Notifications"> | string | null
    hrId?: StringNullableFilter<"Notifications"> | string | null
    title?: StringFilter<"Notifications"> | string
    message?: StringFilter<"Notifications"> | string
    isRead?: BoolFilter<"Notifications"> | boolean
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    applicant?: XOR<ApplicantsNullableScalarRelationFilter, ApplicantsWhereInput> | null
    hr?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type NotificationsOrderByWithRelationInput = {
    id?: SortOrder
    applicantId?: SortOrderInput | SortOrder
    hrId?: SortOrderInput | SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    applicant?: ApplicantsOrderByWithRelationInput
    hr?: UsersOrderByWithRelationInput
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    applicantId?: StringNullableFilter<"Notifications"> | string | null
    hrId?: StringNullableFilter<"Notifications"> | string | null
    title?: StringFilter<"Notifications"> | string
    message?: StringFilter<"Notifications"> | string
    isRead?: BoolFilter<"Notifications"> | boolean
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    applicant?: XOR<ApplicantsNullableScalarRelationFilter, ApplicantsWhereInput> | null
    hr?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "id">

  export type NotificationsOrderByWithAggregationInput = {
    id?: SortOrder
    applicantId?: SortOrderInput | SortOrder
    hrId?: SortOrderInput | SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationsCountOrderByAggregateInput
    _max?: NotificationsMaxOrderByAggregateInput
    _min?: NotificationsMinOrderByAggregateInput
  }

  export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    OR?: NotificationsScalarWhereWithAggregatesInput[]
    NOT?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notifications"> | string
    applicantId?: StringNullableWithAggregatesFilter<"Notifications"> | string | null
    hrId?: StringNullableWithAggregatesFilter<"Notifications"> | string | null
    title?: StringWithAggregatesFilter<"Notifications"> | string
    message?: StringWithAggregatesFilter<"Notifications"> | string
    isRead?: BoolWithAggregatesFilter<"Notifications"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    email: string
    username: string
    fullname: string
    birthdate: Date | string
    password: string
    isValidated?: boolean
    otp?: number | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedJobs?: JobsCreateNestedManyWithoutPublisherInput
    hrNotifications?: NotificationsCreateNestedManyWithoutHrInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    fullname: string
    birthdate: Date | string
    password: string
    isValidated?: boolean
    otp?: number | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedJobs?: JobsUncheckedCreateNestedManyWithoutPublisherInput
    hrNotifications?: NotificationsUncheckedCreateNestedManyWithoutHrInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedJobs?: JobsUpdateManyWithoutPublisherNestedInput
    hrNotifications?: NotificationsUpdateManyWithoutHrNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedJobs?: JobsUncheckedUpdateManyWithoutPublisherNestedInput
    hrNotifications?: NotificationsUncheckedUpdateManyWithoutHrNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    email: string
    username: string
    fullname: string
    birthdate: Date | string
    password: string
    isValidated?: boolean
    otp?: number | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantsCreateInput = {
    id?: string
    email: string
    password: string
    fullname: string
    birthdate: Date | string
    about?: string | null
    isValidated?: boolean
    otp?: number | null
    profileImgUrl?: string | null
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumesCreateNestedManyWithoutApplicantInput
    interviewSchedules?: InterviewSchedulesCreateNestedManyWithoutApplicantInput
    appliedJobs?: ApplicantJobsCreateNestedManyWithoutApplicantInput
    notifications?: NotificationsCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantsUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    fullname: string
    birthdate: Date | string
    about?: string | null
    isValidated?: boolean
    otp?: number | null
    profileImgUrl?: string | null
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumesUncheckedCreateNestedManyWithoutApplicantInput
    interviewSchedules?: InterviewSchedulesUncheckedCreateNestedManyWithoutApplicantInput
    appliedJobs?: ApplicantJobsUncheckedCreateNestedManyWithoutApplicantInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumesUpdateManyWithoutApplicantNestedInput
    interviewSchedules?: InterviewSchedulesUpdateManyWithoutApplicantNestedInput
    appliedJobs?: ApplicantJobsUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationsUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumesUncheckedUpdateManyWithoutApplicantNestedInput
    interviewSchedules?: InterviewSchedulesUncheckedUpdateManyWithoutApplicantNestedInput
    appliedJobs?: ApplicantJobsUncheckedUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantsCreateManyInput = {
    id?: string
    email: string
    password: string
    fullname: string
    birthdate: Date | string
    about?: string | null
    isValidated?: boolean
    otp?: number | null
    profileImgUrl?: string | null
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicantsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobsCreateInput = {
    id?: string
    position: string
    jobLocType: $Enums.JobLocationType
    empType: $Enums.EmploymentType
    qualification: string
    description: string
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    publisher: UsersCreateNestedOneWithoutPublishedJobsInput
    Resumes?: ResumesCreateNestedManyWithoutJobInput
    interviewSchedules?: InterviewSchedulesCreateNestedManyWithoutJobInput
    applicantJobs?: ApplicantJobsCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateInput = {
    id?: string
    position: string
    jobLocType: $Enums.JobLocationType
    empType: $Enums.EmploymentType
    publisherId: string
    qualification: string
    description: string
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Resumes?: ResumesUncheckedCreateNestedManyWithoutJobInput
    interviewSchedules?: InterviewSchedulesUncheckedCreateNestedManyWithoutJobInput
    applicantJobs?: ApplicantJobsUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    jobLocType?: EnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    qualification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publisher?: UsersUpdateOneRequiredWithoutPublishedJobsNestedInput
    Resumes?: ResumesUpdateManyWithoutJobNestedInput
    interviewSchedules?: InterviewSchedulesUpdateManyWithoutJobNestedInput
    applicantJobs?: ApplicantJobsUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    jobLocType?: EnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    publisherId?: StringFieldUpdateOperationsInput | string
    qualification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Resumes?: ResumesUncheckedUpdateManyWithoutJobNestedInput
    interviewSchedules?: InterviewSchedulesUncheckedUpdateManyWithoutJobNestedInput
    applicantJobs?: ApplicantJobsUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobsCreateManyInput = {
    id?: string
    position: string
    jobLocType: $Enums.JobLocationType
    empType: $Enums.EmploymentType
    publisherId: string
    qualification: string
    description: string
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    jobLocType?: EnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    qualification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    jobLocType?: EnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    publisherId?: StringFieldUpdateOperationsInput | string
    qualification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumesCreateInput = {
    id?: string
    resumeName: string
    resumeUrl: string
    submittedAt?: Date | string
    updatedAt?: Date | string
    applicant: ApplicantsCreateNestedOneWithoutResumesInput
    job: JobsCreateNestedOneWithoutResumesInput
  }

  export type ResumesUncheckedCreateInput = {
    id?: string
    applicantId: string
    jobId: string
    resumeName: string
    resumeUrl: string
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeName?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantsUpdateOneRequiredWithoutResumesNestedInput
    job?: JobsUpdateOneRequiredWithoutResumesNestedInput
  }

  export type ResumesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    resumeName?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumesCreateManyInput = {
    id?: string
    applicantId: string
    jobId: string
    resumeName: string
    resumeUrl: string
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeName?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    resumeName?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewSchedulesCreateInput = {
    id?: string
    scheduleDate: Date | string
    scheduleTime: Date | string
    location?: string | null
    status: $Enums.ScheduleStatus
    mode: $Enums.InterviewMode
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: ApplicantsCreateNestedOneWithoutInterviewSchedulesInput
    job: JobsCreateNestedOneWithoutInterviewSchedulesInput
  }

  export type InterviewSchedulesUncheckedCreateInput = {
    id?: string
    applicantId: string
    jobId: string
    scheduleDate: Date | string
    scheduleTime: Date | string
    location?: string | null
    status: $Enums.ScheduleStatus
    mode: $Enums.InterviewMode
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewSchedulesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    mode?: EnumInterviewModeFieldUpdateOperationsInput | $Enums.InterviewMode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantsUpdateOneRequiredWithoutInterviewSchedulesNestedInput
    job?: JobsUpdateOneRequiredWithoutInterviewSchedulesNestedInput
  }

  export type InterviewSchedulesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    mode?: EnumInterviewModeFieldUpdateOperationsInput | $Enums.InterviewMode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewSchedulesCreateManyInput = {
    id?: string
    applicantId: string
    jobId: string
    scheduleDate: Date | string
    scheduleTime: Date | string
    location?: string | null
    status: $Enums.ScheduleStatus
    mode: $Enums.InterviewMode
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewSchedulesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    mode?: EnumInterviewModeFieldUpdateOperationsInput | $Enums.InterviewMode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewSchedulesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    mode?: EnumInterviewModeFieldUpdateOperationsInput | $Enums.InterviewMode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantJobsCreateInput = {
    id?: string
    status: $Enums.JobStatus
    appliedAt?: Date | string
    applicant: ApplicantsCreateNestedOneWithoutAppliedJobsInput
    job: JobsCreateNestedOneWithoutApplicantJobsInput
  }

  export type ApplicantJobsUncheckedCreateInput = {
    id?: string
    applicantId: string
    jobId: string
    status: $Enums.JobStatus
    appliedAt?: Date | string
  }

  export type ApplicantJobsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantsUpdateOneRequiredWithoutAppliedJobsNestedInput
    job?: JobsUpdateOneRequiredWithoutApplicantJobsNestedInput
  }

  export type ApplicantJobsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantJobsCreateManyInput = {
    id?: string
    applicantId: string
    jobId: string
    status: $Enums.JobStatus
    appliedAt?: Date | string
  }

  export type ApplicantJobsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantJobsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateInput = {
    id?: string
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    applicant?: ApplicantsCreateNestedOneWithoutNotificationsInput
    hr?: UsersCreateNestedOneWithoutHrNotificationsInput
  }

  export type NotificationsUncheckedCreateInput = {
    id?: string
    applicantId?: string | null
    hrId?: string | null
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantsUpdateOneWithoutNotificationsNestedInput
    hr?: UsersUpdateOneWithoutHrNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: NullableStringFieldUpdateOperationsInput | string | null
    hrId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateManyInput = {
    id?: string
    applicantId?: string | null
    hrId?: string | null
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: NullableStringFieldUpdateOperationsInput | string | null
    hrId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type JobsListRelationFilter = {
    every?: JobsWhereInput
    some?: JobsWhereInput
    none?: JobsWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: NotificationsWhereInput
    some?: NotificationsWhereInput
    none?: NotificationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JobsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    birthdate?: SortOrder
    password?: SortOrder
    isValidated?: SortOrder
    otp?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    otp?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    birthdate?: SortOrder
    password?: SortOrder
    isValidated?: SortOrder
    otp?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    birthdate?: SortOrder
    password?: SortOrder
    isValidated?: SortOrder
    otp?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    otp?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type ResumesListRelationFilter = {
    every?: ResumesWhereInput
    some?: ResumesWhereInput
    none?: ResumesWhereInput
  }

  export type InterviewSchedulesListRelationFilter = {
    every?: InterviewSchedulesWhereInput
    some?: InterviewSchedulesWhereInput
    none?: InterviewSchedulesWhereInput
  }

  export type ApplicantJobsListRelationFilter = {
    every?: ApplicantJobsWhereInput
    some?: ApplicantJobsWhereInput
    none?: ApplicantJobsWhereInput
  }

  export type ResumesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterviewSchedulesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicantJobsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicantsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullname?: SortOrder
    birthdate?: SortOrder
    about?: SortOrder
    isValidated?: SortOrder
    otp?: SortOrder
    profileImgUrl?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicantsAvgOrderByAggregateInput = {
    otp?: SortOrder
  }

  export type ApplicantsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullname?: SortOrder
    birthdate?: SortOrder
    about?: SortOrder
    isValidated?: SortOrder
    otp?: SortOrder
    profileImgUrl?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicantsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullname?: SortOrder
    birthdate?: SortOrder
    about?: SortOrder
    isValidated?: SortOrder
    otp?: SortOrder
    profileImgUrl?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApplicantsSumOrderByAggregateInput = {
    otp?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumJobLocationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobLocationType | EnumJobLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobLocationTypeFilter<$PrismaModel> | $Enums.JobLocationType
  }

  export type EnumEmploymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeFilter<$PrismaModel> | $Enums.EmploymentType
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type JobsCountOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    jobLocType?: SortOrder
    empType?: SortOrder
    publisherId?: SortOrder
    qualification?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobsMaxOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    jobLocType?: SortOrder
    empType?: SortOrder
    publisherId?: SortOrder
    qualification?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobsMinOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    jobLocType?: SortOrder
    empType?: SortOrder
    publisherId?: SortOrder
    qualification?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumJobLocationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobLocationType | EnumJobLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobLocationTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobLocationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobLocationTypeFilter<$PrismaModel>
    _max?: NestedEnumJobLocationTypeFilter<$PrismaModel>
  }

  export type EnumEmploymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentTypeFilter<$PrismaModel>
    _max?: NestedEnumEmploymentTypeFilter<$PrismaModel>
  }

  export type ApplicantsScalarRelationFilter = {
    is?: ApplicantsWhereInput
    isNot?: ApplicantsWhereInput
  }

  export type JobsScalarRelationFilter = {
    is?: JobsWhereInput
    isNot?: JobsWhereInput
  }

  export type ResumesCountOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobId?: SortOrder
    resumeName?: SortOrder
    resumeUrl?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumesMaxOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobId?: SortOrder
    resumeName?: SortOrder
    resumeUrl?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumesMinOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobId?: SortOrder
    resumeName?: SortOrder
    resumeUrl?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
  }

  export type EnumInterviewModeFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewMode | EnumInterviewModeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewMode[] | ListEnumInterviewModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewMode[] | ListEnumInterviewModeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewModeFilter<$PrismaModel> | $Enums.InterviewMode
  }

  export type InterviewSchedulesCountOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobId?: SortOrder
    scheduleDate?: SortOrder
    scheduleTime?: SortOrder
    location?: SortOrder
    status?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewSchedulesMaxOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobId?: SortOrder
    scheduleDate?: SortOrder
    scheduleTime?: SortOrder
    location?: SortOrder
    status?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterviewSchedulesMinOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobId?: SortOrder
    scheduleDate?: SortOrder
    scheduleTime?: SortOrder
    location?: SortOrder
    status?: SortOrder
    mode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
  }

  export type EnumInterviewModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewMode | EnumInterviewModeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewMode[] | ListEnumInterviewModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewMode[] | ListEnumInterviewModeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewModeWithAggregatesFilter<$PrismaModel> | $Enums.InterviewMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewModeFilter<$PrismaModel>
    _max?: NestedEnumInterviewModeFilter<$PrismaModel>
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type ApplicantJobsCountOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
  }

  export type ApplicantJobsMaxOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
  }

  export type ApplicantJobsMinOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    jobId?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type ApplicantsNullableScalarRelationFilter = {
    is?: ApplicantsWhereInput | null
    isNot?: ApplicantsWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type NotificationsCountOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    hrId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    hrId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationsMinOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    hrId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type JobsCreateNestedManyWithoutPublisherInput = {
    create?: XOR<JobsCreateWithoutPublisherInput, JobsUncheckedCreateWithoutPublisherInput> | JobsCreateWithoutPublisherInput[] | JobsUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutPublisherInput | JobsCreateOrConnectWithoutPublisherInput[]
    createMany?: JobsCreateManyPublisherInputEnvelope
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutHrInput = {
    create?: XOR<NotificationsCreateWithoutHrInput, NotificationsUncheckedCreateWithoutHrInput> | NotificationsCreateWithoutHrInput[] | NotificationsUncheckedCreateWithoutHrInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutHrInput | NotificationsCreateOrConnectWithoutHrInput[]
    createMany?: NotificationsCreateManyHrInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type JobsUncheckedCreateNestedManyWithoutPublisherInput = {
    create?: XOR<JobsCreateWithoutPublisherInput, JobsUncheckedCreateWithoutPublisherInput> | JobsCreateWithoutPublisherInput[] | JobsUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutPublisherInput | JobsCreateOrConnectWithoutPublisherInput[]
    createMany?: JobsCreateManyPublisherInputEnvelope
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutHrInput = {
    create?: XOR<NotificationsCreateWithoutHrInput, NotificationsUncheckedCreateWithoutHrInput> | NotificationsCreateWithoutHrInput[] | NotificationsUncheckedCreateWithoutHrInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutHrInput | NotificationsCreateOrConnectWithoutHrInput[]
    createMany?: NotificationsCreateManyHrInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type JobsUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<JobsCreateWithoutPublisherInput, JobsUncheckedCreateWithoutPublisherInput> | JobsCreateWithoutPublisherInput[] | JobsUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutPublisherInput | JobsCreateOrConnectWithoutPublisherInput[]
    upsert?: JobsUpsertWithWhereUniqueWithoutPublisherInput | JobsUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: JobsCreateManyPublisherInputEnvelope
    set?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    disconnect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    delete?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    update?: JobsUpdateWithWhereUniqueWithoutPublisherInput | JobsUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: JobsUpdateManyWithWhereWithoutPublisherInput | JobsUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: JobsScalarWhereInput | JobsScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutHrNestedInput = {
    create?: XOR<NotificationsCreateWithoutHrInput, NotificationsUncheckedCreateWithoutHrInput> | NotificationsCreateWithoutHrInput[] | NotificationsUncheckedCreateWithoutHrInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutHrInput | NotificationsCreateOrConnectWithoutHrInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutHrInput | NotificationsUpsertWithWhereUniqueWithoutHrInput[]
    createMany?: NotificationsCreateManyHrInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutHrInput | NotificationsUpdateWithWhereUniqueWithoutHrInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutHrInput | NotificationsUpdateManyWithWhereWithoutHrInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type JobsUncheckedUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<JobsCreateWithoutPublisherInput, JobsUncheckedCreateWithoutPublisherInput> | JobsCreateWithoutPublisherInput[] | JobsUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutPublisherInput | JobsCreateOrConnectWithoutPublisherInput[]
    upsert?: JobsUpsertWithWhereUniqueWithoutPublisherInput | JobsUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: JobsCreateManyPublisherInputEnvelope
    set?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    disconnect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    delete?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    update?: JobsUpdateWithWhereUniqueWithoutPublisherInput | JobsUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: JobsUpdateManyWithWhereWithoutPublisherInput | JobsUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: JobsScalarWhereInput | JobsScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutHrNestedInput = {
    create?: XOR<NotificationsCreateWithoutHrInput, NotificationsUncheckedCreateWithoutHrInput> | NotificationsCreateWithoutHrInput[] | NotificationsUncheckedCreateWithoutHrInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutHrInput | NotificationsCreateOrConnectWithoutHrInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutHrInput | NotificationsUpsertWithWhereUniqueWithoutHrInput[]
    createMany?: NotificationsCreateManyHrInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutHrInput | NotificationsUpdateWithWhereUniqueWithoutHrInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutHrInput | NotificationsUpdateManyWithWhereWithoutHrInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type ResumesCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ResumesCreateWithoutApplicantInput, ResumesUncheckedCreateWithoutApplicantInput> | ResumesCreateWithoutApplicantInput[] | ResumesUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ResumesCreateOrConnectWithoutApplicantInput | ResumesCreateOrConnectWithoutApplicantInput[]
    createMany?: ResumesCreateManyApplicantInputEnvelope
    connect?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
  }

  export type InterviewSchedulesCreateNestedManyWithoutApplicantInput = {
    create?: XOR<InterviewSchedulesCreateWithoutApplicantInput, InterviewSchedulesUncheckedCreateWithoutApplicantInput> | InterviewSchedulesCreateWithoutApplicantInput[] | InterviewSchedulesUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: InterviewSchedulesCreateOrConnectWithoutApplicantInput | InterviewSchedulesCreateOrConnectWithoutApplicantInput[]
    createMany?: InterviewSchedulesCreateManyApplicantInputEnvelope
    connect?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
  }

  export type ApplicantJobsCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicantJobsCreateWithoutApplicantInput, ApplicantJobsUncheckedCreateWithoutApplicantInput> | ApplicantJobsCreateWithoutApplicantInput[] | ApplicantJobsUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicantJobsCreateOrConnectWithoutApplicantInput | ApplicantJobsCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicantJobsCreateManyApplicantInputEnvelope
    connect?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutApplicantInput = {
    create?: XOR<NotificationsCreateWithoutApplicantInput, NotificationsUncheckedCreateWithoutApplicantInput> | NotificationsCreateWithoutApplicantInput[] | NotificationsUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutApplicantInput | NotificationsCreateOrConnectWithoutApplicantInput[]
    createMany?: NotificationsCreateManyApplicantInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type ResumesUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ResumesCreateWithoutApplicantInput, ResumesUncheckedCreateWithoutApplicantInput> | ResumesCreateWithoutApplicantInput[] | ResumesUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ResumesCreateOrConnectWithoutApplicantInput | ResumesCreateOrConnectWithoutApplicantInput[]
    createMany?: ResumesCreateManyApplicantInputEnvelope
    connect?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
  }

  export type InterviewSchedulesUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<InterviewSchedulesCreateWithoutApplicantInput, InterviewSchedulesUncheckedCreateWithoutApplicantInput> | InterviewSchedulesCreateWithoutApplicantInput[] | InterviewSchedulesUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: InterviewSchedulesCreateOrConnectWithoutApplicantInput | InterviewSchedulesCreateOrConnectWithoutApplicantInput[]
    createMany?: InterviewSchedulesCreateManyApplicantInputEnvelope
    connect?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
  }

  export type ApplicantJobsUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicantJobsCreateWithoutApplicantInput, ApplicantJobsUncheckedCreateWithoutApplicantInput> | ApplicantJobsCreateWithoutApplicantInput[] | ApplicantJobsUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicantJobsCreateOrConnectWithoutApplicantInput | ApplicantJobsCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicantJobsCreateManyApplicantInputEnvelope
    connect?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<NotificationsCreateWithoutApplicantInput, NotificationsUncheckedCreateWithoutApplicantInput> | NotificationsCreateWithoutApplicantInput[] | NotificationsUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutApplicantInput | NotificationsCreateOrConnectWithoutApplicantInput[]
    createMany?: NotificationsCreateManyApplicantInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type ResumesUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ResumesCreateWithoutApplicantInput, ResumesUncheckedCreateWithoutApplicantInput> | ResumesCreateWithoutApplicantInput[] | ResumesUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ResumesCreateOrConnectWithoutApplicantInput | ResumesCreateOrConnectWithoutApplicantInput[]
    upsert?: ResumesUpsertWithWhereUniqueWithoutApplicantInput | ResumesUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ResumesCreateManyApplicantInputEnvelope
    set?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    disconnect?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    delete?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    connect?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    update?: ResumesUpdateWithWhereUniqueWithoutApplicantInput | ResumesUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ResumesUpdateManyWithWhereWithoutApplicantInput | ResumesUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ResumesScalarWhereInput | ResumesScalarWhereInput[]
  }

  export type InterviewSchedulesUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<InterviewSchedulesCreateWithoutApplicantInput, InterviewSchedulesUncheckedCreateWithoutApplicantInput> | InterviewSchedulesCreateWithoutApplicantInput[] | InterviewSchedulesUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: InterviewSchedulesCreateOrConnectWithoutApplicantInput | InterviewSchedulesCreateOrConnectWithoutApplicantInput[]
    upsert?: InterviewSchedulesUpsertWithWhereUniqueWithoutApplicantInput | InterviewSchedulesUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: InterviewSchedulesCreateManyApplicantInputEnvelope
    set?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    disconnect?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    delete?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    connect?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    update?: InterviewSchedulesUpdateWithWhereUniqueWithoutApplicantInput | InterviewSchedulesUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: InterviewSchedulesUpdateManyWithWhereWithoutApplicantInput | InterviewSchedulesUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: InterviewSchedulesScalarWhereInput | InterviewSchedulesScalarWhereInput[]
  }

  export type ApplicantJobsUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicantJobsCreateWithoutApplicantInput, ApplicantJobsUncheckedCreateWithoutApplicantInput> | ApplicantJobsCreateWithoutApplicantInput[] | ApplicantJobsUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicantJobsCreateOrConnectWithoutApplicantInput | ApplicantJobsCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicantJobsUpsertWithWhereUniqueWithoutApplicantInput | ApplicantJobsUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicantJobsCreateManyApplicantInputEnvelope
    set?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    disconnect?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    delete?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    connect?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    update?: ApplicantJobsUpdateWithWhereUniqueWithoutApplicantInput | ApplicantJobsUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicantJobsUpdateManyWithWhereWithoutApplicantInput | ApplicantJobsUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicantJobsScalarWhereInput | ApplicantJobsScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<NotificationsCreateWithoutApplicantInput, NotificationsUncheckedCreateWithoutApplicantInput> | NotificationsCreateWithoutApplicantInput[] | NotificationsUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutApplicantInput | NotificationsCreateOrConnectWithoutApplicantInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutApplicantInput | NotificationsUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: NotificationsCreateManyApplicantInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutApplicantInput | NotificationsUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutApplicantInput | NotificationsUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type ResumesUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ResumesCreateWithoutApplicantInput, ResumesUncheckedCreateWithoutApplicantInput> | ResumesCreateWithoutApplicantInput[] | ResumesUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ResumesCreateOrConnectWithoutApplicantInput | ResumesCreateOrConnectWithoutApplicantInput[]
    upsert?: ResumesUpsertWithWhereUniqueWithoutApplicantInput | ResumesUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ResumesCreateManyApplicantInputEnvelope
    set?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    disconnect?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    delete?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    connect?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    update?: ResumesUpdateWithWhereUniqueWithoutApplicantInput | ResumesUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ResumesUpdateManyWithWhereWithoutApplicantInput | ResumesUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ResumesScalarWhereInput | ResumesScalarWhereInput[]
  }

  export type InterviewSchedulesUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<InterviewSchedulesCreateWithoutApplicantInput, InterviewSchedulesUncheckedCreateWithoutApplicantInput> | InterviewSchedulesCreateWithoutApplicantInput[] | InterviewSchedulesUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: InterviewSchedulesCreateOrConnectWithoutApplicantInput | InterviewSchedulesCreateOrConnectWithoutApplicantInput[]
    upsert?: InterviewSchedulesUpsertWithWhereUniqueWithoutApplicantInput | InterviewSchedulesUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: InterviewSchedulesCreateManyApplicantInputEnvelope
    set?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    disconnect?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    delete?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    connect?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    update?: InterviewSchedulesUpdateWithWhereUniqueWithoutApplicantInput | InterviewSchedulesUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: InterviewSchedulesUpdateManyWithWhereWithoutApplicantInput | InterviewSchedulesUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: InterviewSchedulesScalarWhereInput | InterviewSchedulesScalarWhereInput[]
  }

  export type ApplicantJobsUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicantJobsCreateWithoutApplicantInput, ApplicantJobsUncheckedCreateWithoutApplicantInput> | ApplicantJobsCreateWithoutApplicantInput[] | ApplicantJobsUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicantJobsCreateOrConnectWithoutApplicantInput | ApplicantJobsCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicantJobsUpsertWithWhereUniqueWithoutApplicantInput | ApplicantJobsUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicantJobsCreateManyApplicantInputEnvelope
    set?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    disconnect?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    delete?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    connect?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    update?: ApplicantJobsUpdateWithWhereUniqueWithoutApplicantInput | ApplicantJobsUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicantJobsUpdateManyWithWhereWithoutApplicantInput | ApplicantJobsUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicantJobsScalarWhereInput | ApplicantJobsScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<NotificationsCreateWithoutApplicantInput, NotificationsUncheckedCreateWithoutApplicantInput> | NotificationsCreateWithoutApplicantInput[] | NotificationsUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutApplicantInput | NotificationsCreateOrConnectWithoutApplicantInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutApplicantInput | NotificationsUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: NotificationsCreateManyApplicantInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutApplicantInput | NotificationsUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutApplicantInput | NotificationsUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutPublishedJobsInput = {
    create?: XOR<UsersCreateWithoutPublishedJobsInput, UsersUncheckedCreateWithoutPublishedJobsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPublishedJobsInput
    connect?: UsersWhereUniqueInput
  }

  export type ResumesCreateNestedManyWithoutJobInput = {
    create?: XOR<ResumesCreateWithoutJobInput, ResumesUncheckedCreateWithoutJobInput> | ResumesCreateWithoutJobInput[] | ResumesUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ResumesCreateOrConnectWithoutJobInput | ResumesCreateOrConnectWithoutJobInput[]
    createMany?: ResumesCreateManyJobInputEnvelope
    connect?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
  }

  export type InterviewSchedulesCreateNestedManyWithoutJobInput = {
    create?: XOR<InterviewSchedulesCreateWithoutJobInput, InterviewSchedulesUncheckedCreateWithoutJobInput> | InterviewSchedulesCreateWithoutJobInput[] | InterviewSchedulesUncheckedCreateWithoutJobInput[]
    connectOrCreate?: InterviewSchedulesCreateOrConnectWithoutJobInput | InterviewSchedulesCreateOrConnectWithoutJobInput[]
    createMany?: InterviewSchedulesCreateManyJobInputEnvelope
    connect?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
  }

  export type ApplicantJobsCreateNestedManyWithoutJobInput = {
    create?: XOR<ApplicantJobsCreateWithoutJobInput, ApplicantJobsUncheckedCreateWithoutJobInput> | ApplicantJobsCreateWithoutJobInput[] | ApplicantJobsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicantJobsCreateOrConnectWithoutJobInput | ApplicantJobsCreateOrConnectWithoutJobInput[]
    createMany?: ApplicantJobsCreateManyJobInputEnvelope
    connect?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
  }

  export type ResumesUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ResumesCreateWithoutJobInput, ResumesUncheckedCreateWithoutJobInput> | ResumesCreateWithoutJobInput[] | ResumesUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ResumesCreateOrConnectWithoutJobInput | ResumesCreateOrConnectWithoutJobInput[]
    createMany?: ResumesCreateManyJobInputEnvelope
    connect?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
  }

  export type InterviewSchedulesUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<InterviewSchedulesCreateWithoutJobInput, InterviewSchedulesUncheckedCreateWithoutJobInput> | InterviewSchedulesCreateWithoutJobInput[] | InterviewSchedulesUncheckedCreateWithoutJobInput[]
    connectOrCreate?: InterviewSchedulesCreateOrConnectWithoutJobInput | InterviewSchedulesCreateOrConnectWithoutJobInput[]
    createMany?: InterviewSchedulesCreateManyJobInputEnvelope
    connect?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
  }

  export type ApplicantJobsUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ApplicantJobsCreateWithoutJobInput, ApplicantJobsUncheckedCreateWithoutJobInput> | ApplicantJobsCreateWithoutJobInput[] | ApplicantJobsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicantJobsCreateOrConnectWithoutJobInput | ApplicantJobsCreateOrConnectWithoutJobInput[]
    createMany?: ApplicantJobsCreateManyJobInputEnvelope
    connect?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
  }

  export type EnumJobLocationTypeFieldUpdateOperationsInput = {
    set?: $Enums.JobLocationType
  }

  export type EnumEmploymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmploymentType
  }

  export type UsersUpdateOneRequiredWithoutPublishedJobsNestedInput = {
    create?: XOR<UsersCreateWithoutPublishedJobsInput, UsersUncheckedCreateWithoutPublishedJobsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPublishedJobsInput
    upsert?: UsersUpsertWithoutPublishedJobsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPublishedJobsInput, UsersUpdateWithoutPublishedJobsInput>, UsersUncheckedUpdateWithoutPublishedJobsInput>
  }

  export type ResumesUpdateManyWithoutJobNestedInput = {
    create?: XOR<ResumesCreateWithoutJobInput, ResumesUncheckedCreateWithoutJobInput> | ResumesCreateWithoutJobInput[] | ResumesUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ResumesCreateOrConnectWithoutJobInput | ResumesCreateOrConnectWithoutJobInput[]
    upsert?: ResumesUpsertWithWhereUniqueWithoutJobInput | ResumesUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ResumesCreateManyJobInputEnvelope
    set?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    disconnect?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    delete?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    connect?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    update?: ResumesUpdateWithWhereUniqueWithoutJobInput | ResumesUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ResumesUpdateManyWithWhereWithoutJobInput | ResumesUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ResumesScalarWhereInput | ResumesScalarWhereInput[]
  }

  export type InterviewSchedulesUpdateManyWithoutJobNestedInput = {
    create?: XOR<InterviewSchedulesCreateWithoutJobInput, InterviewSchedulesUncheckedCreateWithoutJobInput> | InterviewSchedulesCreateWithoutJobInput[] | InterviewSchedulesUncheckedCreateWithoutJobInput[]
    connectOrCreate?: InterviewSchedulesCreateOrConnectWithoutJobInput | InterviewSchedulesCreateOrConnectWithoutJobInput[]
    upsert?: InterviewSchedulesUpsertWithWhereUniqueWithoutJobInput | InterviewSchedulesUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: InterviewSchedulesCreateManyJobInputEnvelope
    set?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    disconnect?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    delete?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    connect?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    update?: InterviewSchedulesUpdateWithWhereUniqueWithoutJobInput | InterviewSchedulesUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: InterviewSchedulesUpdateManyWithWhereWithoutJobInput | InterviewSchedulesUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: InterviewSchedulesScalarWhereInput | InterviewSchedulesScalarWhereInput[]
  }

  export type ApplicantJobsUpdateManyWithoutJobNestedInput = {
    create?: XOR<ApplicantJobsCreateWithoutJobInput, ApplicantJobsUncheckedCreateWithoutJobInput> | ApplicantJobsCreateWithoutJobInput[] | ApplicantJobsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicantJobsCreateOrConnectWithoutJobInput | ApplicantJobsCreateOrConnectWithoutJobInput[]
    upsert?: ApplicantJobsUpsertWithWhereUniqueWithoutJobInput | ApplicantJobsUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ApplicantJobsCreateManyJobInputEnvelope
    set?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    disconnect?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    delete?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    connect?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    update?: ApplicantJobsUpdateWithWhereUniqueWithoutJobInput | ApplicantJobsUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ApplicantJobsUpdateManyWithWhereWithoutJobInput | ApplicantJobsUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ApplicantJobsScalarWhereInput | ApplicantJobsScalarWhereInput[]
  }

  export type ResumesUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<ResumesCreateWithoutJobInput, ResumesUncheckedCreateWithoutJobInput> | ResumesCreateWithoutJobInput[] | ResumesUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ResumesCreateOrConnectWithoutJobInput | ResumesCreateOrConnectWithoutJobInput[]
    upsert?: ResumesUpsertWithWhereUniqueWithoutJobInput | ResumesUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ResumesCreateManyJobInputEnvelope
    set?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    disconnect?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    delete?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    connect?: ResumesWhereUniqueInput | ResumesWhereUniqueInput[]
    update?: ResumesUpdateWithWhereUniqueWithoutJobInput | ResumesUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ResumesUpdateManyWithWhereWithoutJobInput | ResumesUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ResumesScalarWhereInput | ResumesScalarWhereInput[]
  }

  export type InterviewSchedulesUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<InterviewSchedulesCreateWithoutJobInput, InterviewSchedulesUncheckedCreateWithoutJobInput> | InterviewSchedulesCreateWithoutJobInput[] | InterviewSchedulesUncheckedCreateWithoutJobInput[]
    connectOrCreate?: InterviewSchedulesCreateOrConnectWithoutJobInput | InterviewSchedulesCreateOrConnectWithoutJobInput[]
    upsert?: InterviewSchedulesUpsertWithWhereUniqueWithoutJobInput | InterviewSchedulesUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: InterviewSchedulesCreateManyJobInputEnvelope
    set?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    disconnect?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    delete?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    connect?: InterviewSchedulesWhereUniqueInput | InterviewSchedulesWhereUniqueInput[]
    update?: InterviewSchedulesUpdateWithWhereUniqueWithoutJobInput | InterviewSchedulesUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: InterviewSchedulesUpdateManyWithWhereWithoutJobInput | InterviewSchedulesUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: InterviewSchedulesScalarWhereInput | InterviewSchedulesScalarWhereInput[]
  }

  export type ApplicantJobsUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<ApplicantJobsCreateWithoutJobInput, ApplicantJobsUncheckedCreateWithoutJobInput> | ApplicantJobsCreateWithoutJobInput[] | ApplicantJobsUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicantJobsCreateOrConnectWithoutJobInput | ApplicantJobsCreateOrConnectWithoutJobInput[]
    upsert?: ApplicantJobsUpsertWithWhereUniqueWithoutJobInput | ApplicantJobsUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ApplicantJobsCreateManyJobInputEnvelope
    set?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    disconnect?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    delete?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    connect?: ApplicantJobsWhereUniqueInput | ApplicantJobsWhereUniqueInput[]
    update?: ApplicantJobsUpdateWithWhereUniqueWithoutJobInput | ApplicantJobsUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ApplicantJobsUpdateManyWithWhereWithoutJobInput | ApplicantJobsUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ApplicantJobsScalarWhereInput | ApplicantJobsScalarWhereInput[]
  }

  export type ApplicantsCreateNestedOneWithoutResumesInput = {
    create?: XOR<ApplicantsCreateWithoutResumesInput, ApplicantsUncheckedCreateWithoutResumesInput>
    connectOrCreate?: ApplicantsCreateOrConnectWithoutResumesInput
    connect?: ApplicantsWhereUniqueInput
  }

  export type JobsCreateNestedOneWithoutResumesInput = {
    create?: XOR<JobsCreateWithoutResumesInput, JobsUncheckedCreateWithoutResumesInput>
    connectOrCreate?: JobsCreateOrConnectWithoutResumesInput
    connect?: JobsWhereUniqueInput
  }

  export type ApplicantsUpdateOneRequiredWithoutResumesNestedInput = {
    create?: XOR<ApplicantsCreateWithoutResumesInput, ApplicantsUncheckedCreateWithoutResumesInput>
    connectOrCreate?: ApplicantsCreateOrConnectWithoutResumesInput
    upsert?: ApplicantsUpsertWithoutResumesInput
    connect?: ApplicantsWhereUniqueInput
    update?: XOR<XOR<ApplicantsUpdateToOneWithWhereWithoutResumesInput, ApplicantsUpdateWithoutResumesInput>, ApplicantsUncheckedUpdateWithoutResumesInput>
  }

  export type JobsUpdateOneRequiredWithoutResumesNestedInput = {
    create?: XOR<JobsCreateWithoutResumesInput, JobsUncheckedCreateWithoutResumesInput>
    connectOrCreate?: JobsCreateOrConnectWithoutResumesInput
    upsert?: JobsUpsertWithoutResumesInput
    connect?: JobsWhereUniqueInput
    update?: XOR<XOR<JobsUpdateToOneWithWhereWithoutResumesInput, JobsUpdateWithoutResumesInput>, JobsUncheckedUpdateWithoutResumesInput>
  }

  export type ApplicantsCreateNestedOneWithoutInterviewSchedulesInput = {
    create?: XOR<ApplicantsCreateWithoutInterviewSchedulesInput, ApplicantsUncheckedCreateWithoutInterviewSchedulesInput>
    connectOrCreate?: ApplicantsCreateOrConnectWithoutInterviewSchedulesInput
    connect?: ApplicantsWhereUniqueInput
  }

  export type JobsCreateNestedOneWithoutInterviewSchedulesInput = {
    create?: XOR<JobsCreateWithoutInterviewSchedulesInput, JobsUncheckedCreateWithoutInterviewSchedulesInput>
    connectOrCreate?: JobsCreateOrConnectWithoutInterviewSchedulesInput
    connect?: JobsWhereUniqueInput
  }

  export type EnumScheduleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ScheduleStatus
  }

  export type EnumInterviewModeFieldUpdateOperationsInput = {
    set?: $Enums.InterviewMode
  }

  export type ApplicantsUpdateOneRequiredWithoutInterviewSchedulesNestedInput = {
    create?: XOR<ApplicantsCreateWithoutInterviewSchedulesInput, ApplicantsUncheckedCreateWithoutInterviewSchedulesInput>
    connectOrCreate?: ApplicantsCreateOrConnectWithoutInterviewSchedulesInput
    upsert?: ApplicantsUpsertWithoutInterviewSchedulesInput
    connect?: ApplicantsWhereUniqueInput
    update?: XOR<XOR<ApplicantsUpdateToOneWithWhereWithoutInterviewSchedulesInput, ApplicantsUpdateWithoutInterviewSchedulesInput>, ApplicantsUncheckedUpdateWithoutInterviewSchedulesInput>
  }

  export type JobsUpdateOneRequiredWithoutInterviewSchedulesNestedInput = {
    create?: XOR<JobsCreateWithoutInterviewSchedulesInput, JobsUncheckedCreateWithoutInterviewSchedulesInput>
    connectOrCreate?: JobsCreateOrConnectWithoutInterviewSchedulesInput
    upsert?: JobsUpsertWithoutInterviewSchedulesInput
    connect?: JobsWhereUniqueInput
    update?: XOR<XOR<JobsUpdateToOneWithWhereWithoutInterviewSchedulesInput, JobsUpdateWithoutInterviewSchedulesInput>, JobsUncheckedUpdateWithoutInterviewSchedulesInput>
  }

  export type ApplicantsCreateNestedOneWithoutAppliedJobsInput = {
    create?: XOR<ApplicantsCreateWithoutAppliedJobsInput, ApplicantsUncheckedCreateWithoutAppliedJobsInput>
    connectOrCreate?: ApplicantsCreateOrConnectWithoutAppliedJobsInput
    connect?: ApplicantsWhereUniqueInput
  }

  export type JobsCreateNestedOneWithoutApplicantJobsInput = {
    create?: XOR<JobsCreateWithoutApplicantJobsInput, JobsUncheckedCreateWithoutApplicantJobsInput>
    connectOrCreate?: JobsCreateOrConnectWithoutApplicantJobsInput
    connect?: JobsWhereUniqueInput
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type ApplicantsUpdateOneRequiredWithoutAppliedJobsNestedInput = {
    create?: XOR<ApplicantsCreateWithoutAppliedJobsInput, ApplicantsUncheckedCreateWithoutAppliedJobsInput>
    connectOrCreate?: ApplicantsCreateOrConnectWithoutAppliedJobsInput
    upsert?: ApplicantsUpsertWithoutAppliedJobsInput
    connect?: ApplicantsWhereUniqueInput
    update?: XOR<XOR<ApplicantsUpdateToOneWithWhereWithoutAppliedJobsInput, ApplicantsUpdateWithoutAppliedJobsInput>, ApplicantsUncheckedUpdateWithoutAppliedJobsInput>
  }

  export type JobsUpdateOneRequiredWithoutApplicantJobsNestedInput = {
    create?: XOR<JobsCreateWithoutApplicantJobsInput, JobsUncheckedCreateWithoutApplicantJobsInput>
    connectOrCreate?: JobsCreateOrConnectWithoutApplicantJobsInput
    upsert?: JobsUpsertWithoutApplicantJobsInput
    connect?: JobsWhereUniqueInput
    update?: XOR<XOR<JobsUpdateToOneWithWhereWithoutApplicantJobsInput, JobsUpdateWithoutApplicantJobsInput>, JobsUncheckedUpdateWithoutApplicantJobsInput>
  }

  export type ApplicantsCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ApplicantsCreateWithoutNotificationsInput, ApplicantsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ApplicantsCreateOrConnectWithoutNotificationsInput
    connect?: ApplicantsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutHrNotificationsInput = {
    create?: XOR<UsersCreateWithoutHrNotificationsInput, UsersUncheckedCreateWithoutHrNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutHrNotificationsInput
    connect?: UsersWhereUniqueInput
  }

  export type ApplicantsUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<ApplicantsCreateWithoutNotificationsInput, ApplicantsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ApplicantsCreateOrConnectWithoutNotificationsInput
    upsert?: ApplicantsUpsertWithoutNotificationsInput
    disconnect?: ApplicantsWhereInput | boolean
    delete?: ApplicantsWhereInput | boolean
    connect?: ApplicantsWhereUniqueInput
    update?: XOR<XOR<ApplicantsUpdateToOneWithWhereWithoutNotificationsInput, ApplicantsUpdateWithoutNotificationsInput>, ApplicantsUncheckedUpdateWithoutNotificationsInput>
  }

  export type UsersUpdateOneWithoutHrNotificationsNestedInput = {
    create?: XOR<UsersCreateWithoutHrNotificationsInput, UsersUncheckedCreateWithoutHrNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutHrNotificationsInput
    upsert?: UsersUpsertWithoutHrNotificationsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutHrNotificationsInput, UsersUpdateWithoutHrNotificationsInput>, UsersUncheckedUpdateWithoutHrNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumJobLocationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobLocationType | EnumJobLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobLocationTypeFilter<$PrismaModel> | $Enums.JobLocationType
  }

  export type NestedEnumEmploymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeFilter<$PrismaModel> | $Enums.EmploymentType
  }

  export type NestedEnumJobLocationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobLocationType | EnumJobLocationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobLocationTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobLocationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobLocationTypeFilter<$PrismaModel>
    _max?: NestedEnumJobLocationTypeFilter<$PrismaModel>
  }

  export type NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentTypeFilter<$PrismaModel>
    _max?: NestedEnumEmploymentTypeFilter<$PrismaModel>
  }

  export type NestedEnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
  }

  export type NestedEnumInterviewModeFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewMode | EnumInterviewModeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewMode[] | ListEnumInterviewModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewMode[] | ListEnumInterviewModeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewModeFilter<$PrismaModel> | $Enums.InterviewMode
  }

  export type NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScheduleStatus[] | ListEnumScheduleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
  }

  export type NestedEnumInterviewModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterviewMode | EnumInterviewModeFieldRefInput<$PrismaModel>
    in?: $Enums.InterviewMode[] | ListEnumInterviewModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterviewMode[] | ListEnumInterviewModeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterviewModeWithAggregatesFilter<$PrismaModel> | $Enums.InterviewMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterviewModeFilter<$PrismaModel>
    _max?: NestedEnumInterviewModeFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type JobsCreateWithoutPublisherInput = {
    id?: string
    position: string
    jobLocType: $Enums.JobLocationType
    empType: $Enums.EmploymentType
    qualification: string
    description: string
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Resumes?: ResumesCreateNestedManyWithoutJobInput
    interviewSchedules?: InterviewSchedulesCreateNestedManyWithoutJobInput
    applicantJobs?: ApplicantJobsCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateWithoutPublisherInput = {
    id?: string
    position: string
    jobLocType: $Enums.JobLocationType
    empType: $Enums.EmploymentType
    qualification: string
    description: string
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Resumes?: ResumesUncheckedCreateNestedManyWithoutJobInput
    interviewSchedules?: InterviewSchedulesUncheckedCreateNestedManyWithoutJobInput
    applicantJobs?: ApplicantJobsUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsCreateOrConnectWithoutPublisherInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutPublisherInput, JobsUncheckedCreateWithoutPublisherInput>
  }

  export type JobsCreateManyPublisherInputEnvelope = {
    data: JobsCreateManyPublisherInput | JobsCreateManyPublisherInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutHrInput = {
    id?: string
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    applicant?: ApplicantsCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateWithoutHrInput = {
    id?: string
    applicantId?: string | null
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationsCreateOrConnectWithoutHrInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutHrInput, NotificationsUncheckedCreateWithoutHrInput>
  }

  export type NotificationsCreateManyHrInputEnvelope = {
    data: NotificationsCreateManyHrInput | NotificationsCreateManyHrInput[]
    skipDuplicates?: boolean
  }

  export type JobsUpsertWithWhereUniqueWithoutPublisherInput = {
    where: JobsWhereUniqueInput
    update: XOR<JobsUpdateWithoutPublisherInput, JobsUncheckedUpdateWithoutPublisherInput>
    create: XOR<JobsCreateWithoutPublisherInput, JobsUncheckedCreateWithoutPublisherInput>
  }

  export type JobsUpdateWithWhereUniqueWithoutPublisherInput = {
    where: JobsWhereUniqueInput
    data: XOR<JobsUpdateWithoutPublisherInput, JobsUncheckedUpdateWithoutPublisherInput>
  }

  export type JobsUpdateManyWithWhereWithoutPublisherInput = {
    where: JobsScalarWhereInput
    data: XOR<JobsUpdateManyMutationInput, JobsUncheckedUpdateManyWithoutPublisherInput>
  }

  export type JobsScalarWhereInput = {
    AND?: JobsScalarWhereInput | JobsScalarWhereInput[]
    OR?: JobsScalarWhereInput[]
    NOT?: JobsScalarWhereInput | JobsScalarWhereInput[]
    id?: StringFilter<"Jobs"> | string
    position?: StringFilter<"Jobs"> | string
    jobLocType?: EnumJobLocationTypeFilter<"Jobs"> | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFilter<"Jobs"> | $Enums.EmploymentType
    publisherId?: StringFilter<"Jobs"> | string
    qualification?: StringFilter<"Jobs"> | string
    description?: StringFilter<"Jobs"> | string
    deadline?: DateTimeFilter<"Jobs"> | Date | string
    createdAt?: DateTimeFilter<"Jobs"> | Date | string
    updatedAt?: DateTimeFilter<"Jobs"> | Date | string
  }

  export type NotificationsUpsertWithWhereUniqueWithoutHrInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutHrInput, NotificationsUncheckedUpdateWithoutHrInput>
    create: XOR<NotificationsCreateWithoutHrInput, NotificationsUncheckedCreateWithoutHrInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutHrInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutHrInput, NotificationsUncheckedUpdateWithoutHrInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutHrInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutHrInput>
  }

  export type NotificationsScalarWhereInput = {
    AND?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    OR?: NotificationsScalarWhereInput[]
    NOT?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    id?: StringFilter<"Notifications"> | string
    applicantId?: StringNullableFilter<"Notifications"> | string | null
    hrId?: StringNullableFilter<"Notifications"> | string | null
    title?: StringFilter<"Notifications"> | string
    message?: StringFilter<"Notifications"> | string
    isRead?: BoolFilter<"Notifications"> | boolean
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
  }

  export type ResumesCreateWithoutApplicantInput = {
    id?: string
    resumeName: string
    resumeUrl: string
    submittedAt?: Date | string
    updatedAt?: Date | string
    job: JobsCreateNestedOneWithoutResumesInput
  }

  export type ResumesUncheckedCreateWithoutApplicantInput = {
    id?: string
    jobId: string
    resumeName: string
    resumeUrl: string
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumesCreateOrConnectWithoutApplicantInput = {
    where: ResumesWhereUniqueInput
    create: XOR<ResumesCreateWithoutApplicantInput, ResumesUncheckedCreateWithoutApplicantInput>
  }

  export type ResumesCreateManyApplicantInputEnvelope = {
    data: ResumesCreateManyApplicantInput | ResumesCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type InterviewSchedulesCreateWithoutApplicantInput = {
    id?: string
    scheduleDate: Date | string
    scheduleTime: Date | string
    location?: string | null
    status: $Enums.ScheduleStatus
    mode: $Enums.InterviewMode
    createdAt?: Date | string
    updatedAt?: Date | string
    job: JobsCreateNestedOneWithoutInterviewSchedulesInput
  }

  export type InterviewSchedulesUncheckedCreateWithoutApplicantInput = {
    id?: string
    jobId: string
    scheduleDate: Date | string
    scheduleTime: Date | string
    location?: string | null
    status: $Enums.ScheduleStatus
    mode: $Enums.InterviewMode
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewSchedulesCreateOrConnectWithoutApplicantInput = {
    where: InterviewSchedulesWhereUniqueInput
    create: XOR<InterviewSchedulesCreateWithoutApplicantInput, InterviewSchedulesUncheckedCreateWithoutApplicantInput>
  }

  export type InterviewSchedulesCreateManyApplicantInputEnvelope = {
    data: InterviewSchedulesCreateManyApplicantInput | InterviewSchedulesCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type ApplicantJobsCreateWithoutApplicantInput = {
    id?: string
    status: $Enums.JobStatus
    appliedAt?: Date | string
    job: JobsCreateNestedOneWithoutApplicantJobsInput
  }

  export type ApplicantJobsUncheckedCreateWithoutApplicantInput = {
    id?: string
    jobId: string
    status: $Enums.JobStatus
    appliedAt?: Date | string
  }

  export type ApplicantJobsCreateOrConnectWithoutApplicantInput = {
    where: ApplicantJobsWhereUniqueInput
    create: XOR<ApplicantJobsCreateWithoutApplicantInput, ApplicantJobsUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicantJobsCreateManyApplicantInputEnvelope = {
    data: ApplicantJobsCreateManyApplicantInput | ApplicantJobsCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutApplicantInput = {
    id?: string
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    hr?: UsersCreateNestedOneWithoutHrNotificationsInput
  }

  export type NotificationsUncheckedCreateWithoutApplicantInput = {
    id?: string
    hrId?: string | null
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationsCreateOrConnectWithoutApplicantInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutApplicantInput, NotificationsUncheckedCreateWithoutApplicantInput>
  }

  export type NotificationsCreateManyApplicantInputEnvelope = {
    data: NotificationsCreateManyApplicantInput | NotificationsCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type ResumesUpsertWithWhereUniqueWithoutApplicantInput = {
    where: ResumesWhereUniqueInput
    update: XOR<ResumesUpdateWithoutApplicantInput, ResumesUncheckedUpdateWithoutApplicantInput>
    create: XOR<ResumesCreateWithoutApplicantInput, ResumesUncheckedCreateWithoutApplicantInput>
  }

  export type ResumesUpdateWithWhereUniqueWithoutApplicantInput = {
    where: ResumesWhereUniqueInput
    data: XOR<ResumesUpdateWithoutApplicantInput, ResumesUncheckedUpdateWithoutApplicantInput>
  }

  export type ResumesUpdateManyWithWhereWithoutApplicantInput = {
    where: ResumesScalarWhereInput
    data: XOR<ResumesUpdateManyMutationInput, ResumesUncheckedUpdateManyWithoutApplicantInput>
  }

  export type ResumesScalarWhereInput = {
    AND?: ResumesScalarWhereInput | ResumesScalarWhereInput[]
    OR?: ResumesScalarWhereInput[]
    NOT?: ResumesScalarWhereInput | ResumesScalarWhereInput[]
    id?: StringFilter<"Resumes"> | string
    applicantId?: StringFilter<"Resumes"> | string
    jobId?: StringFilter<"Resumes"> | string
    resumeName?: StringFilter<"Resumes"> | string
    resumeUrl?: StringFilter<"Resumes"> | string
    submittedAt?: DateTimeFilter<"Resumes"> | Date | string
    updatedAt?: DateTimeFilter<"Resumes"> | Date | string
  }

  export type InterviewSchedulesUpsertWithWhereUniqueWithoutApplicantInput = {
    where: InterviewSchedulesWhereUniqueInput
    update: XOR<InterviewSchedulesUpdateWithoutApplicantInput, InterviewSchedulesUncheckedUpdateWithoutApplicantInput>
    create: XOR<InterviewSchedulesCreateWithoutApplicantInput, InterviewSchedulesUncheckedCreateWithoutApplicantInput>
  }

  export type InterviewSchedulesUpdateWithWhereUniqueWithoutApplicantInput = {
    where: InterviewSchedulesWhereUniqueInput
    data: XOR<InterviewSchedulesUpdateWithoutApplicantInput, InterviewSchedulesUncheckedUpdateWithoutApplicantInput>
  }

  export type InterviewSchedulesUpdateManyWithWhereWithoutApplicantInput = {
    where: InterviewSchedulesScalarWhereInput
    data: XOR<InterviewSchedulesUpdateManyMutationInput, InterviewSchedulesUncheckedUpdateManyWithoutApplicantInput>
  }

  export type InterviewSchedulesScalarWhereInput = {
    AND?: InterviewSchedulesScalarWhereInput | InterviewSchedulesScalarWhereInput[]
    OR?: InterviewSchedulesScalarWhereInput[]
    NOT?: InterviewSchedulesScalarWhereInput | InterviewSchedulesScalarWhereInput[]
    id?: StringFilter<"InterviewSchedules"> | string
    applicantId?: StringFilter<"InterviewSchedules"> | string
    jobId?: StringFilter<"InterviewSchedules"> | string
    scheduleDate?: DateTimeFilter<"InterviewSchedules"> | Date | string
    scheduleTime?: DateTimeFilter<"InterviewSchedules"> | Date | string
    location?: StringNullableFilter<"InterviewSchedules"> | string | null
    status?: EnumScheduleStatusFilter<"InterviewSchedules"> | $Enums.ScheduleStatus
    mode?: EnumInterviewModeFilter<"InterviewSchedules"> | $Enums.InterviewMode
    createdAt?: DateTimeFilter<"InterviewSchedules"> | Date | string
    updatedAt?: DateTimeFilter<"InterviewSchedules"> | Date | string
  }

  export type ApplicantJobsUpsertWithWhereUniqueWithoutApplicantInput = {
    where: ApplicantJobsWhereUniqueInput
    update: XOR<ApplicantJobsUpdateWithoutApplicantInput, ApplicantJobsUncheckedUpdateWithoutApplicantInput>
    create: XOR<ApplicantJobsCreateWithoutApplicantInput, ApplicantJobsUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicantJobsUpdateWithWhereUniqueWithoutApplicantInput = {
    where: ApplicantJobsWhereUniqueInput
    data: XOR<ApplicantJobsUpdateWithoutApplicantInput, ApplicantJobsUncheckedUpdateWithoutApplicantInput>
  }

  export type ApplicantJobsUpdateManyWithWhereWithoutApplicantInput = {
    where: ApplicantJobsScalarWhereInput
    data: XOR<ApplicantJobsUpdateManyMutationInput, ApplicantJobsUncheckedUpdateManyWithoutApplicantInput>
  }

  export type ApplicantJobsScalarWhereInput = {
    AND?: ApplicantJobsScalarWhereInput | ApplicantJobsScalarWhereInput[]
    OR?: ApplicantJobsScalarWhereInput[]
    NOT?: ApplicantJobsScalarWhereInput | ApplicantJobsScalarWhereInput[]
    id?: StringFilter<"ApplicantJobs"> | string
    applicantId?: StringFilter<"ApplicantJobs"> | string
    jobId?: StringFilter<"ApplicantJobs"> | string
    status?: EnumJobStatusFilter<"ApplicantJobs"> | $Enums.JobStatus
    appliedAt?: DateTimeFilter<"ApplicantJobs"> | Date | string
  }

  export type NotificationsUpsertWithWhereUniqueWithoutApplicantInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutApplicantInput, NotificationsUncheckedUpdateWithoutApplicantInput>
    create: XOR<NotificationsCreateWithoutApplicantInput, NotificationsUncheckedCreateWithoutApplicantInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutApplicantInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutApplicantInput, NotificationsUncheckedUpdateWithoutApplicantInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutApplicantInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutApplicantInput>
  }

  export type UsersCreateWithoutPublishedJobsInput = {
    id?: string
    email: string
    username: string
    fullname: string
    birthdate: Date | string
    password: string
    isValidated?: boolean
    otp?: number | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    hrNotifications?: NotificationsCreateNestedManyWithoutHrInput
  }

  export type UsersUncheckedCreateWithoutPublishedJobsInput = {
    id?: string
    email: string
    username: string
    fullname: string
    birthdate: Date | string
    password: string
    isValidated?: boolean
    otp?: number | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    hrNotifications?: NotificationsUncheckedCreateNestedManyWithoutHrInput
  }

  export type UsersCreateOrConnectWithoutPublishedJobsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPublishedJobsInput, UsersUncheckedCreateWithoutPublishedJobsInput>
  }

  export type ResumesCreateWithoutJobInput = {
    id?: string
    resumeName: string
    resumeUrl: string
    submittedAt?: Date | string
    updatedAt?: Date | string
    applicant: ApplicantsCreateNestedOneWithoutResumesInput
  }

  export type ResumesUncheckedCreateWithoutJobInput = {
    id?: string
    applicantId: string
    resumeName: string
    resumeUrl: string
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumesCreateOrConnectWithoutJobInput = {
    where: ResumesWhereUniqueInput
    create: XOR<ResumesCreateWithoutJobInput, ResumesUncheckedCreateWithoutJobInput>
  }

  export type ResumesCreateManyJobInputEnvelope = {
    data: ResumesCreateManyJobInput | ResumesCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type InterviewSchedulesCreateWithoutJobInput = {
    id?: string
    scheduleDate: Date | string
    scheduleTime: Date | string
    location?: string | null
    status: $Enums.ScheduleStatus
    mode: $Enums.InterviewMode
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: ApplicantsCreateNestedOneWithoutInterviewSchedulesInput
  }

  export type InterviewSchedulesUncheckedCreateWithoutJobInput = {
    id?: string
    applicantId: string
    scheduleDate: Date | string
    scheduleTime: Date | string
    location?: string | null
    status: $Enums.ScheduleStatus
    mode: $Enums.InterviewMode
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewSchedulesCreateOrConnectWithoutJobInput = {
    where: InterviewSchedulesWhereUniqueInput
    create: XOR<InterviewSchedulesCreateWithoutJobInput, InterviewSchedulesUncheckedCreateWithoutJobInput>
  }

  export type InterviewSchedulesCreateManyJobInputEnvelope = {
    data: InterviewSchedulesCreateManyJobInput | InterviewSchedulesCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type ApplicantJobsCreateWithoutJobInput = {
    id?: string
    status: $Enums.JobStatus
    appliedAt?: Date | string
    applicant: ApplicantsCreateNestedOneWithoutAppliedJobsInput
  }

  export type ApplicantJobsUncheckedCreateWithoutJobInput = {
    id?: string
    applicantId: string
    status: $Enums.JobStatus
    appliedAt?: Date | string
  }

  export type ApplicantJobsCreateOrConnectWithoutJobInput = {
    where: ApplicantJobsWhereUniqueInput
    create: XOR<ApplicantJobsCreateWithoutJobInput, ApplicantJobsUncheckedCreateWithoutJobInput>
  }

  export type ApplicantJobsCreateManyJobInputEnvelope = {
    data: ApplicantJobsCreateManyJobInput | ApplicantJobsCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutPublishedJobsInput = {
    update: XOR<UsersUpdateWithoutPublishedJobsInput, UsersUncheckedUpdateWithoutPublishedJobsInput>
    create: XOR<UsersCreateWithoutPublishedJobsInput, UsersUncheckedCreateWithoutPublishedJobsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPublishedJobsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPublishedJobsInput, UsersUncheckedUpdateWithoutPublishedJobsInput>
  }

  export type UsersUpdateWithoutPublishedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hrNotifications?: NotificationsUpdateManyWithoutHrNestedInput
  }

  export type UsersUncheckedUpdateWithoutPublishedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hrNotifications?: NotificationsUncheckedUpdateManyWithoutHrNestedInput
  }

  export type ResumesUpsertWithWhereUniqueWithoutJobInput = {
    where: ResumesWhereUniqueInput
    update: XOR<ResumesUpdateWithoutJobInput, ResumesUncheckedUpdateWithoutJobInput>
    create: XOR<ResumesCreateWithoutJobInput, ResumesUncheckedCreateWithoutJobInput>
  }

  export type ResumesUpdateWithWhereUniqueWithoutJobInput = {
    where: ResumesWhereUniqueInput
    data: XOR<ResumesUpdateWithoutJobInput, ResumesUncheckedUpdateWithoutJobInput>
  }

  export type ResumesUpdateManyWithWhereWithoutJobInput = {
    where: ResumesScalarWhereInput
    data: XOR<ResumesUpdateManyMutationInput, ResumesUncheckedUpdateManyWithoutJobInput>
  }

  export type InterviewSchedulesUpsertWithWhereUniqueWithoutJobInput = {
    where: InterviewSchedulesWhereUniqueInput
    update: XOR<InterviewSchedulesUpdateWithoutJobInput, InterviewSchedulesUncheckedUpdateWithoutJobInput>
    create: XOR<InterviewSchedulesCreateWithoutJobInput, InterviewSchedulesUncheckedCreateWithoutJobInput>
  }

  export type InterviewSchedulesUpdateWithWhereUniqueWithoutJobInput = {
    where: InterviewSchedulesWhereUniqueInput
    data: XOR<InterviewSchedulesUpdateWithoutJobInput, InterviewSchedulesUncheckedUpdateWithoutJobInput>
  }

  export type InterviewSchedulesUpdateManyWithWhereWithoutJobInput = {
    where: InterviewSchedulesScalarWhereInput
    data: XOR<InterviewSchedulesUpdateManyMutationInput, InterviewSchedulesUncheckedUpdateManyWithoutJobInput>
  }

  export type ApplicantJobsUpsertWithWhereUniqueWithoutJobInput = {
    where: ApplicantJobsWhereUniqueInput
    update: XOR<ApplicantJobsUpdateWithoutJobInput, ApplicantJobsUncheckedUpdateWithoutJobInput>
    create: XOR<ApplicantJobsCreateWithoutJobInput, ApplicantJobsUncheckedCreateWithoutJobInput>
  }

  export type ApplicantJobsUpdateWithWhereUniqueWithoutJobInput = {
    where: ApplicantJobsWhereUniqueInput
    data: XOR<ApplicantJobsUpdateWithoutJobInput, ApplicantJobsUncheckedUpdateWithoutJobInput>
  }

  export type ApplicantJobsUpdateManyWithWhereWithoutJobInput = {
    where: ApplicantJobsScalarWhereInput
    data: XOR<ApplicantJobsUpdateManyMutationInput, ApplicantJobsUncheckedUpdateManyWithoutJobInput>
  }

  export type ApplicantsCreateWithoutResumesInput = {
    id?: string
    email: string
    password: string
    fullname: string
    birthdate: Date | string
    about?: string | null
    isValidated?: boolean
    otp?: number | null
    profileImgUrl?: string | null
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewSchedules?: InterviewSchedulesCreateNestedManyWithoutApplicantInput
    appliedJobs?: ApplicantJobsCreateNestedManyWithoutApplicantInput
    notifications?: NotificationsCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantsUncheckedCreateWithoutResumesInput = {
    id?: string
    email: string
    password: string
    fullname: string
    birthdate: Date | string
    about?: string | null
    isValidated?: boolean
    otp?: number | null
    profileImgUrl?: string | null
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewSchedules?: InterviewSchedulesUncheckedCreateNestedManyWithoutApplicantInput
    appliedJobs?: ApplicantJobsUncheckedCreateNestedManyWithoutApplicantInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantsCreateOrConnectWithoutResumesInput = {
    where: ApplicantsWhereUniqueInput
    create: XOR<ApplicantsCreateWithoutResumesInput, ApplicantsUncheckedCreateWithoutResumesInput>
  }

  export type JobsCreateWithoutResumesInput = {
    id?: string
    position: string
    jobLocType: $Enums.JobLocationType
    empType: $Enums.EmploymentType
    qualification: string
    description: string
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    publisher: UsersCreateNestedOneWithoutPublishedJobsInput
    interviewSchedules?: InterviewSchedulesCreateNestedManyWithoutJobInput
    applicantJobs?: ApplicantJobsCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateWithoutResumesInput = {
    id?: string
    position: string
    jobLocType: $Enums.JobLocationType
    empType: $Enums.EmploymentType
    publisherId: string
    qualification: string
    description: string
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    interviewSchedules?: InterviewSchedulesUncheckedCreateNestedManyWithoutJobInput
    applicantJobs?: ApplicantJobsUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsCreateOrConnectWithoutResumesInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutResumesInput, JobsUncheckedCreateWithoutResumesInput>
  }

  export type ApplicantsUpsertWithoutResumesInput = {
    update: XOR<ApplicantsUpdateWithoutResumesInput, ApplicantsUncheckedUpdateWithoutResumesInput>
    create: XOR<ApplicantsCreateWithoutResumesInput, ApplicantsUncheckedCreateWithoutResumesInput>
    where?: ApplicantsWhereInput
  }

  export type ApplicantsUpdateToOneWithWhereWithoutResumesInput = {
    where?: ApplicantsWhereInput
    data: XOR<ApplicantsUpdateWithoutResumesInput, ApplicantsUncheckedUpdateWithoutResumesInput>
  }

  export type ApplicantsUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewSchedules?: InterviewSchedulesUpdateManyWithoutApplicantNestedInput
    appliedJobs?: ApplicantJobsUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationsUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantsUncheckedUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewSchedules?: InterviewSchedulesUncheckedUpdateManyWithoutApplicantNestedInput
    appliedJobs?: ApplicantJobsUncheckedUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type JobsUpsertWithoutResumesInput = {
    update: XOR<JobsUpdateWithoutResumesInput, JobsUncheckedUpdateWithoutResumesInput>
    create: XOR<JobsCreateWithoutResumesInput, JobsUncheckedCreateWithoutResumesInput>
    where?: JobsWhereInput
  }

  export type JobsUpdateToOneWithWhereWithoutResumesInput = {
    where?: JobsWhereInput
    data: XOR<JobsUpdateWithoutResumesInput, JobsUncheckedUpdateWithoutResumesInput>
  }

  export type JobsUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    jobLocType?: EnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    qualification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publisher?: UsersUpdateOneRequiredWithoutPublishedJobsNestedInput
    interviewSchedules?: InterviewSchedulesUpdateManyWithoutJobNestedInput
    applicantJobs?: ApplicantJobsUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateWithoutResumesInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    jobLocType?: EnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    publisherId?: StringFieldUpdateOperationsInput | string
    qualification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interviewSchedules?: InterviewSchedulesUncheckedUpdateManyWithoutJobNestedInput
    applicantJobs?: ApplicantJobsUncheckedUpdateManyWithoutJobNestedInput
  }

  export type ApplicantsCreateWithoutInterviewSchedulesInput = {
    id?: string
    email: string
    password: string
    fullname: string
    birthdate: Date | string
    about?: string | null
    isValidated?: boolean
    otp?: number | null
    profileImgUrl?: string | null
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumesCreateNestedManyWithoutApplicantInput
    appliedJobs?: ApplicantJobsCreateNestedManyWithoutApplicantInput
    notifications?: NotificationsCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantsUncheckedCreateWithoutInterviewSchedulesInput = {
    id?: string
    email: string
    password: string
    fullname: string
    birthdate: Date | string
    about?: string | null
    isValidated?: boolean
    otp?: number | null
    profileImgUrl?: string | null
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumesUncheckedCreateNestedManyWithoutApplicantInput
    appliedJobs?: ApplicantJobsUncheckedCreateNestedManyWithoutApplicantInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantsCreateOrConnectWithoutInterviewSchedulesInput = {
    where: ApplicantsWhereUniqueInput
    create: XOR<ApplicantsCreateWithoutInterviewSchedulesInput, ApplicantsUncheckedCreateWithoutInterviewSchedulesInput>
  }

  export type JobsCreateWithoutInterviewSchedulesInput = {
    id?: string
    position: string
    jobLocType: $Enums.JobLocationType
    empType: $Enums.EmploymentType
    qualification: string
    description: string
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    publisher: UsersCreateNestedOneWithoutPublishedJobsInput
    Resumes?: ResumesCreateNestedManyWithoutJobInput
    applicantJobs?: ApplicantJobsCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateWithoutInterviewSchedulesInput = {
    id?: string
    position: string
    jobLocType: $Enums.JobLocationType
    empType: $Enums.EmploymentType
    publisherId: string
    qualification: string
    description: string
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Resumes?: ResumesUncheckedCreateNestedManyWithoutJobInput
    applicantJobs?: ApplicantJobsUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsCreateOrConnectWithoutInterviewSchedulesInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutInterviewSchedulesInput, JobsUncheckedCreateWithoutInterviewSchedulesInput>
  }

  export type ApplicantsUpsertWithoutInterviewSchedulesInput = {
    update: XOR<ApplicantsUpdateWithoutInterviewSchedulesInput, ApplicantsUncheckedUpdateWithoutInterviewSchedulesInput>
    create: XOR<ApplicantsCreateWithoutInterviewSchedulesInput, ApplicantsUncheckedCreateWithoutInterviewSchedulesInput>
    where?: ApplicantsWhereInput
  }

  export type ApplicantsUpdateToOneWithWhereWithoutInterviewSchedulesInput = {
    where?: ApplicantsWhereInput
    data: XOR<ApplicantsUpdateWithoutInterviewSchedulesInput, ApplicantsUncheckedUpdateWithoutInterviewSchedulesInput>
  }

  export type ApplicantsUpdateWithoutInterviewSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumesUpdateManyWithoutApplicantNestedInput
    appliedJobs?: ApplicantJobsUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationsUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantsUncheckedUpdateWithoutInterviewSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumesUncheckedUpdateManyWithoutApplicantNestedInput
    appliedJobs?: ApplicantJobsUncheckedUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type JobsUpsertWithoutInterviewSchedulesInput = {
    update: XOR<JobsUpdateWithoutInterviewSchedulesInput, JobsUncheckedUpdateWithoutInterviewSchedulesInput>
    create: XOR<JobsCreateWithoutInterviewSchedulesInput, JobsUncheckedCreateWithoutInterviewSchedulesInput>
    where?: JobsWhereInput
  }

  export type JobsUpdateToOneWithWhereWithoutInterviewSchedulesInput = {
    where?: JobsWhereInput
    data: XOR<JobsUpdateWithoutInterviewSchedulesInput, JobsUncheckedUpdateWithoutInterviewSchedulesInput>
  }

  export type JobsUpdateWithoutInterviewSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    jobLocType?: EnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    qualification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publisher?: UsersUpdateOneRequiredWithoutPublishedJobsNestedInput
    Resumes?: ResumesUpdateManyWithoutJobNestedInput
    applicantJobs?: ApplicantJobsUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateWithoutInterviewSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    jobLocType?: EnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    publisherId?: StringFieldUpdateOperationsInput | string
    qualification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Resumes?: ResumesUncheckedUpdateManyWithoutJobNestedInput
    applicantJobs?: ApplicantJobsUncheckedUpdateManyWithoutJobNestedInput
  }

  export type ApplicantsCreateWithoutAppliedJobsInput = {
    id?: string
    email: string
    password: string
    fullname: string
    birthdate: Date | string
    about?: string | null
    isValidated?: boolean
    otp?: number | null
    profileImgUrl?: string | null
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumesCreateNestedManyWithoutApplicantInput
    interviewSchedules?: InterviewSchedulesCreateNestedManyWithoutApplicantInput
    notifications?: NotificationsCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantsUncheckedCreateWithoutAppliedJobsInput = {
    id?: string
    email: string
    password: string
    fullname: string
    birthdate: Date | string
    about?: string | null
    isValidated?: boolean
    otp?: number | null
    profileImgUrl?: string | null
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumesUncheckedCreateNestedManyWithoutApplicantInput
    interviewSchedules?: InterviewSchedulesUncheckedCreateNestedManyWithoutApplicantInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantsCreateOrConnectWithoutAppliedJobsInput = {
    where: ApplicantsWhereUniqueInput
    create: XOR<ApplicantsCreateWithoutAppliedJobsInput, ApplicantsUncheckedCreateWithoutAppliedJobsInput>
  }

  export type JobsCreateWithoutApplicantJobsInput = {
    id?: string
    position: string
    jobLocType: $Enums.JobLocationType
    empType: $Enums.EmploymentType
    qualification: string
    description: string
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    publisher: UsersCreateNestedOneWithoutPublishedJobsInput
    Resumes?: ResumesCreateNestedManyWithoutJobInput
    interviewSchedules?: InterviewSchedulesCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateWithoutApplicantJobsInput = {
    id?: string
    position: string
    jobLocType: $Enums.JobLocationType
    empType: $Enums.EmploymentType
    publisherId: string
    qualification: string
    description: string
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Resumes?: ResumesUncheckedCreateNestedManyWithoutJobInput
    interviewSchedules?: InterviewSchedulesUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsCreateOrConnectWithoutApplicantJobsInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutApplicantJobsInput, JobsUncheckedCreateWithoutApplicantJobsInput>
  }

  export type ApplicantsUpsertWithoutAppliedJobsInput = {
    update: XOR<ApplicantsUpdateWithoutAppliedJobsInput, ApplicantsUncheckedUpdateWithoutAppliedJobsInput>
    create: XOR<ApplicantsCreateWithoutAppliedJobsInput, ApplicantsUncheckedCreateWithoutAppliedJobsInput>
    where?: ApplicantsWhereInput
  }

  export type ApplicantsUpdateToOneWithWhereWithoutAppliedJobsInput = {
    where?: ApplicantsWhereInput
    data: XOR<ApplicantsUpdateWithoutAppliedJobsInput, ApplicantsUncheckedUpdateWithoutAppliedJobsInput>
  }

  export type ApplicantsUpdateWithoutAppliedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumesUpdateManyWithoutApplicantNestedInput
    interviewSchedules?: InterviewSchedulesUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationsUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantsUncheckedUpdateWithoutAppliedJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumesUncheckedUpdateManyWithoutApplicantNestedInput
    interviewSchedules?: InterviewSchedulesUncheckedUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type JobsUpsertWithoutApplicantJobsInput = {
    update: XOR<JobsUpdateWithoutApplicantJobsInput, JobsUncheckedUpdateWithoutApplicantJobsInput>
    create: XOR<JobsCreateWithoutApplicantJobsInput, JobsUncheckedCreateWithoutApplicantJobsInput>
    where?: JobsWhereInput
  }

  export type JobsUpdateToOneWithWhereWithoutApplicantJobsInput = {
    where?: JobsWhereInput
    data: XOR<JobsUpdateWithoutApplicantJobsInput, JobsUncheckedUpdateWithoutApplicantJobsInput>
  }

  export type JobsUpdateWithoutApplicantJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    jobLocType?: EnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    qualification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publisher?: UsersUpdateOneRequiredWithoutPublishedJobsNestedInput
    Resumes?: ResumesUpdateManyWithoutJobNestedInput
    interviewSchedules?: InterviewSchedulesUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateWithoutApplicantJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    jobLocType?: EnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    publisherId?: StringFieldUpdateOperationsInput | string
    qualification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Resumes?: ResumesUncheckedUpdateManyWithoutJobNestedInput
    interviewSchedules?: InterviewSchedulesUncheckedUpdateManyWithoutJobNestedInput
  }

  export type ApplicantsCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    fullname: string
    birthdate: Date | string
    about?: string | null
    isValidated?: boolean
    otp?: number | null
    profileImgUrl?: string | null
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumesCreateNestedManyWithoutApplicantInput
    interviewSchedules?: InterviewSchedulesCreateNestedManyWithoutApplicantInput
    appliedJobs?: ApplicantJobsCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantsUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    fullname: string
    birthdate: Date | string
    about?: string | null
    isValidated?: boolean
    otp?: number | null
    profileImgUrl?: string | null
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    resumes?: ResumesUncheckedCreateNestedManyWithoutApplicantInput
    interviewSchedules?: InterviewSchedulesUncheckedCreateNestedManyWithoutApplicantInput
    appliedJobs?: ApplicantJobsUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantsCreateOrConnectWithoutNotificationsInput = {
    where: ApplicantsWhereUniqueInput
    create: XOR<ApplicantsCreateWithoutNotificationsInput, ApplicantsUncheckedCreateWithoutNotificationsInput>
  }

  export type UsersCreateWithoutHrNotificationsInput = {
    id?: string
    email: string
    username: string
    fullname: string
    birthdate: Date | string
    password: string
    isValidated?: boolean
    otp?: number | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedJobs?: JobsCreateNestedManyWithoutPublisherInput
  }

  export type UsersUncheckedCreateWithoutHrNotificationsInput = {
    id?: string
    email: string
    username: string
    fullname: string
    birthdate: Date | string
    password: string
    isValidated?: boolean
    otp?: number | null
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedJobs?: JobsUncheckedCreateNestedManyWithoutPublisherInput
  }

  export type UsersCreateOrConnectWithoutHrNotificationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutHrNotificationsInput, UsersUncheckedCreateWithoutHrNotificationsInput>
  }

  export type ApplicantsUpsertWithoutNotificationsInput = {
    update: XOR<ApplicantsUpdateWithoutNotificationsInput, ApplicantsUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ApplicantsCreateWithoutNotificationsInput, ApplicantsUncheckedCreateWithoutNotificationsInput>
    where?: ApplicantsWhereInput
  }

  export type ApplicantsUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: ApplicantsWhereInput
    data: XOR<ApplicantsUpdateWithoutNotificationsInput, ApplicantsUncheckedUpdateWithoutNotificationsInput>
  }

  export type ApplicantsUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumesUpdateManyWithoutApplicantNestedInput
    interviewSchedules?: InterviewSchedulesUpdateManyWithoutApplicantNestedInput
    appliedJobs?: ApplicantJobsUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantsUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumes?: ResumesUncheckedUpdateManyWithoutApplicantNestedInput
    interviewSchedules?: InterviewSchedulesUncheckedUpdateManyWithoutApplicantNestedInput
    appliedJobs?: ApplicantJobsUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type UsersUpsertWithoutHrNotificationsInput = {
    update: XOR<UsersUpdateWithoutHrNotificationsInput, UsersUncheckedUpdateWithoutHrNotificationsInput>
    create: XOR<UsersCreateWithoutHrNotificationsInput, UsersUncheckedCreateWithoutHrNotificationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutHrNotificationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutHrNotificationsInput, UsersUncheckedUpdateWithoutHrNotificationsInput>
  }

  export type UsersUpdateWithoutHrNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedJobs?: JobsUpdateManyWithoutPublisherNestedInput
  }

  export type UsersUncheckedUpdateWithoutHrNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    isValidated?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedJobs?: JobsUncheckedUpdateManyWithoutPublisherNestedInput
  }

  export type JobsCreateManyPublisherInput = {
    id?: string
    position: string
    jobLocType: $Enums.JobLocationType
    empType: $Enums.EmploymentType
    qualification: string
    description: string
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationsCreateManyHrInput = {
    id?: string
    applicantId?: string | null
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type JobsUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    jobLocType?: EnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    qualification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Resumes?: ResumesUpdateManyWithoutJobNestedInput
    interviewSchedules?: InterviewSchedulesUpdateManyWithoutJobNestedInput
    applicantJobs?: ApplicantJobsUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    jobLocType?: EnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    qualification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Resumes?: ResumesUncheckedUpdateManyWithoutJobNestedInput
    interviewSchedules?: InterviewSchedulesUncheckedUpdateManyWithoutJobNestedInput
    applicantJobs?: ApplicantJobsUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateManyWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    jobLocType?: EnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType
    empType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    qualification?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUpdateWithoutHrInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantsUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateWithoutHrInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyWithoutHrInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumesCreateManyApplicantInput = {
    id?: string
    jobId: string
    resumeName: string
    resumeUrl: string
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewSchedulesCreateManyApplicantInput = {
    id?: string
    jobId: string
    scheduleDate: Date | string
    scheduleTime: Date | string
    location?: string | null
    status: $Enums.ScheduleStatus
    mode: $Enums.InterviewMode
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicantJobsCreateManyApplicantInput = {
    id?: string
    jobId: string
    status: $Enums.JobStatus
    appliedAt?: Date | string
  }

  export type NotificationsCreateManyApplicantInput = {
    id?: string
    hrId?: string | null
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ResumesUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeName?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobsUpdateOneRequiredWithoutResumesNestedInput
  }

  export type ResumesUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    resumeName?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumesUncheckedUpdateManyWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    resumeName?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewSchedulesUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    mode?: EnumInterviewModeFieldUpdateOperationsInput | $Enums.InterviewMode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobsUpdateOneRequiredWithoutInterviewSchedulesNestedInput
  }

  export type InterviewSchedulesUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    mode?: EnumInterviewModeFieldUpdateOperationsInput | $Enums.InterviewMode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewSchedulesUncheckedUpdateManyWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    mode?: EnumInterviewModeFieldUpdateOperationsInput | $Enums.InterviewMode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantJobsUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobsUpdateOneRequiredWithoutApplicantJobsNestedInput
  }

  export type ApplicantJobsUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantJobsUncheckedUpdateManyWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hr?: UsersUpdateOneWithoutHrNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    hrId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string
    hrId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumesCreateManyJobInput = {
    id?: string
    applicantId: string
    resumeName: string
    resumeUrl: string
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterviewSchedulesCreateManyJobInput = {
    id?: string
    applicantId: string
    scheduleDate: Date | string
    scheduleTime: Date | string
    location?: string | null
    status: $Enums.ScheduleStatus
    mode: $Enums.InterviewMode
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicantJobsCreateManyJobInput = {
    id?: string
    applicantId: string
    status: $Enums.JobStatus
    appliedAt?: Date | string
  }

  export type ResumesUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumeName?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantsUpdateOneRequiredWithoutResumesNestedInput
  }

  export type ResumesUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    resumeName?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumesUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    resumeName?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewSchedulesUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    mode?: EnumInterviewModeFieldUpdateOperationsInput | $Enums.InterviewMode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantsUpdateOneRequiredWithoutInterviewSchedulesNestedInput
  }

  export type InterviewSchedulesUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    mode?: EnumInterviewModeFieldUpdateOperationsInput | $Enums.InterviewMode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterviewSchedulesUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleTime?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    mode?: EnumInterviewModeFieldUpdateOperationsInput | $Enums.InterviewMode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantJobsUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantsUpdateOneRequiredWithoutAppliedJobsNestedInput
  }

  export type ApplicantJobsUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantJobsUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}